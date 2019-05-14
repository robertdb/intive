import {
    ERROR_PLAYERS_REQUEST,
    FETCHING_PLAYERS,
    SET_PLAYERS,
    IPlayer,
    PlayerActions
} from './types';


const errorRequestMessage = 'Awkward situation. Api players is not working';

// States' definition
export interface IPlayersReducer {
    isFetching: boolean | null;
    players: Array<IPlayer>,
    error: null | string;
}

export const initialState: IPlayersReducer = {
    isFetching: null,
    players: [],
    error: null,
}

export const players = (state: IPlayersReducer = initialState, action: PlayerActions): IPlayersReducer => {
    switch (action.type) {
        case SET_PLAYERS:
            return { ...state, players: action.payload.players }
        case FETCHING_PLAYERS:
            return { ...state, isFetching: action.payload.fetching }
        case ERROR_PLAYERS_REQUEST:
            return { ...state, error: errorRequestMessage }
    }
    return state
}
