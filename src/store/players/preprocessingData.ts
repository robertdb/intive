import { PositionOption } from '../positions/types';

const rulePositions = [
    "Centre-Forward",
    "Keeper",
    "Centre-Back",
    "Left-Back",
    "Right-Back",
    "Defensive Midfield",
    "Central Midfield",
    "Left Midfield",
    "Attacking Midfield",
    "Left Wing"
];

export const calculateAge = (birthday: string) => {
    let day = new Date(birthday).getTime();
    let ageDifMs = Date.now() - day;
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970).toString()
}

export const mapPositionsPlayers = (data: Array<any>) => {
    let pos = data.map((item) => {
        const { position } = item;
        let pos: PositionOption = { value: '', content: '' };
        pos.value = position;
        pos.content = position;
        return pos;
    })

    pos = pos.filter((position, index, self) =>
        index === self.findIndex((p) => (
            p.value === position.value
        ))
    );
    pos = pos.filter(item => {
        let i = rulePositions.filter(i => i === item.value);
        return i.length > 0 ? true : false;
    })
    return pos;
}