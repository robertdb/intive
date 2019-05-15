import { initialState, players } from '../../../store/players/reducer';
import { FETCHING_PLAYERS } from '../../../store/players/types';
import {
    setPlayerCreator,
    fetchingPlayersCreator,
    errorPlayerrRequest
} from '../../../store/players/actions';


describe('players reducer', () => {
    it('Should return the same like initial state', () => {
        expect(players(initialState, {
            type: FETCHING_PLAYERS, payload: {
                fetching: null
            }
        }))
            .toEqual(initialState)
    })

    it('Should handle setPlayerCreator', () => {
        const stateToCheck = {
            isFetching: null,
            players: [{
                name: 'messi',
                position: 'striker',
                dateOfBirth: '1993-05-13',
                nationality: 'Argentine'
            }],
            error: null,
        }
        expect(players(
            initialState, setPlayerCreator([{
                name: 'messi',
                position: 'striker',
                dateOfBirth: '1993-05-13',
                nationality: 'Argentine'
            }]
            ))
        ).toEqual(stateToCheck)
    })

    it('Should handle fetchingPlayersCreator', () => {
        const stateToCheck = {
            isFetching: true,
            players: [],
            error: null,
        }
        expect(players(
            initialState, fetchingPlayersCreator(true))
        ).toEqual(stateToCheck)
    })
    it('Should handle errorPlayerrRequest', () => {
        const stateToCheck = {
            isFetching: null,
            players: [],
            error: 'Something is technically wrong.',
        }
        expect(players(
            initialState, errorPlayerrRequest())
        ).toEqual(stateToCheck)
    })
})
