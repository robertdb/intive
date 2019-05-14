import {
    ActionCreator,
    AnyAction
} from 'redux';
import { calculateAge, mapPositionsPlayers } from './preprocessingData';
import {
    ThunkAction,
    ThunkDispatch
} from 'redux-thunk';

import {
    IErrorPlayerRequest,
    IfetchingPlayers,
    IsetPlayers,
    ERROR_PLAYERS_REQUEST,
    FETCHING_PLAYERS,
    SET_PLAYERS,
    IPlayer
} from './types';
import { setPositionPlayer } from '../positions/actions';

import { fetchPlayers } from '../../services/players';


export const setPlayerCreator: ActionCreator<IsetPlayers> = (players: Array<IPlayer>) => ({
    type: SET_PLAYERS,
    payload: {
        players
    }
})
export const fetchingPlayersCreator: ActionCreator<IfetchingPlayers> = (fetching: boolean) => ({
    type: FETCHING_PLAYERS,
    payload: {
        fetching
    }
})
export const errorPlayerrRequest: ActionCreator<IErrorPlayerRequest> = () => ({
    type: ERROR_PLAYERS_REQUEST,
})

// THUNK ACTIONS
export const setPlayers = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    // Invoke API
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch(fetchingPlayersCreator(true));
        try {
            const data = await fetchPlayers();
            if (data instanceof Array) {
                let players = data.map((item: any) => {
                    const { name, position, dateOfBirth, nationality } = item;
                    return {
                        name,
                        position,
                        nationality,
                        age: calculateAge(dateOfBirth)
                    }
                })
                dispatch(setPlayerCreator(players));
            }

            dispatch(setPositionPlayer(mapPositionsPlayers(data)));
            dispatch(fetchingPlayersCreator(false));
        } catch (error) {
            dispatch(fetchingPlayersCreator(false));
            dispatch(errorPlayerrRequest());
            console.log('Awkward situation, api players not working');
        }
    }
}
