import { AnyAction } from 'redux'; // Or your own Action definition
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { ApplicationState } from '../../../store';
import { setPlayers, fetchingPlayersCreator, setPlayerCreator } from '../../../store/players/actions';
import { setPositionPlayerCreator } from '../../../store/positions/actions';
import { API } from '../../../settings/setting';
import * as moxios from 'moxios';

type DispatchExts = ThunkDispatch<{}, {}, AnyAction>;

const middleware = [thunk];

const mockStore = createMockStore<ApplicationState, DispatchExts>(middleware);
const store = mockStore();

describe('player thunks', () => {
    beforeEach(() => moxios.install())
    afterEach(() => moxios.uninstall())

    it('Players thunk (SUCCESSFUL CASE)', async () => {
        const userData = [{
            name: 'messi',
            position: 'striker',
            dateOfBirth: '1993-05-13',
            nationality: 'Argentine'
        }]


        moxios.stubRequest(
            `${API}/players.json`,
            {
                response: userData,
            },
        )

        const usersExpected = [{
            name: 'messi',
            position: 'striker',
            age: '26',
            nationality: 'Argentine'
        }]


        const expectedActions = [
            fetchingPlayersCreator(true),
            setPlayerCreator(usersExpected),
            setPositionPlayerCreator([]),
            fetchingPlayersCreator(false),
        ]

        await store.dispatch(setPlayers())

        return expect(store.getActions()).toEqual(expectedActions)
    })

});


