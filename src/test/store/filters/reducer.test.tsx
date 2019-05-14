import { initialState, filterPlayers } from '../../../store/filters/reducer';
import {
    setFilterPlayerCreator,
} from '../../../store/filters/actions';


describe('players reducer', () => {
    it('Should handle setPlayerCreator', () => {
        const stateToCheck = {
            name: 'messi',
            position: 'striker',
            age: '32'
        }
        expect(filterPlayers(initialState, setFilterPlayerCreator(stateToCheck)))
            .toEqual(stateToCheck)
    })
})
