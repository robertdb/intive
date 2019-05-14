import { AnyAction } from 'redux'; // Or your own Action definition
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { ApplicationState } from '../../../store';
import { setPositionPlayer, setPositionPlayerCreator } from '../../../store/positions/actions';


type DispatchExts = ThunkDispatch<{}, {}, AnyAction>;

const middleware = [thunk];

const mockStore = createMockStore<ApplicationState, DispatchExts>(middleware);
const store = mockStore();

describe('player thunks', () => {
    it('Filter Player thunk', async () => {
        const positions = [{
            value: 'striker',
            content: 'striker',
        }]

        const expectedActions = [
            setPositionPlayerCreator(positions)
        ]

        await store.dispatch(setPositionPlayer([{
            value: 'striker',
            content: 'striker',
        }]))

        return expect(store.getActions()).toEqual(expectedActions)
    })

});


