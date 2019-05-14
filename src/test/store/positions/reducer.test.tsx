import { initialState, positions } from '../../../store/positions/reducer';
import {
    setPositionPlayerCreator,
} from '../../../store/positions/actions';


describe('positions reducer', () => {
    it('Should handle setPositionPlayerCreator', () => {
        const data = [
            {
                value: 'striker',
                content: 'striker',
            },
            {
                value: 'goalkepper',
                content: 'goalkepper',
            }
        ];

        const stateToCheck = {
            positionPlayers: data
        }
        expect(positions(initialState, setPositionPlayerCreator(data)))
            .toEqual(stateToCheck)
    })
})
