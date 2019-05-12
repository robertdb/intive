import {
    ActionCreator,
    AnyAction
} from 'redux';
import { calculateAge } from './preprocessingData';
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
export const errorCharacterRequest: ActionCreator<IErrorPlayerRequest> = () => ({
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
                let player = data.map((item: any) => {
                    const { name, position, dateOfBirth } = item;
                    return {
                        name,
                        position,
                        age: calculateAge(dateOfBirth)
                    }
                })
                dispatch(setPlayerCreator(player));
            }
            dispatch(fetchingPlayersCreator(false));
        } catch (error) {
            dispatch(fetchingPlayersCreator(false));
            dispatch(errorCharacterRequest());
            console.log('Awkward situation, api players not working');
        }
    }
}
