import { AnyAction } from 'redux'; // Or your own Action definition
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { ApplicationState } from '../../../store';
import { setFilterPlayers, setFilterPlayerCreator } from '../../../store/filters/actions';


type DispatchExts = ThunkDispatch<{}, {}, AnyAction>;

const middleware = [thunk];

const mockStore = createMockStore<ApplicationState, DispatchExts>(middleware);
const store = mockStore();

describe('player thunks', () => {
    it('Filter Player thunk', async () => {
        const filters = {
            name: 'messi',
            position: 'striker',
            age: '32'
        }

        const expectedActions = [
            setFilterPlayerCreator(filters)
        ]

        await store.dispatch(setFilterPlayers({
            name: 'messi',
            position: 'striker',
            age: '32'
        }))

        return expect(store.getActions()).toEqual(expectedActions)
    })

});


