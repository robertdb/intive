export const calculateAge = (birthday: string) => {
    let day = new Date(birthday).getTime();
    let ageDifMs = Date.now() - day;
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970).toString()
}