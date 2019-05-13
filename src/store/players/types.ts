import { Action } from 'redux'

export const SET_PLAYERS = '@@players/SET_PLAYERS';
export type SET_PLAYERS = typeof SET_PLAYERS;

export const FETCHING_PLAYERS = '@@players/FETCHING_PLAYERS';
export type FETCHING_PLAYERS = typeof FETCHING_PLAYERS;


export const ERROR_PLAYERS_REQUEST = '@@players/ERROR_PLAYERS_REQUEST';
export type ERROR_PLAYERS_REQUEST = typeof ERROR_PLAYERS_REQUEST;


// Player type
export interface IPlayer {
    name: string,
    position: string,
    age: string,
    nationality: string
}


export interface IsetPlayers extends Action {
    type: SET_PLAYERS,
    payload: {
        players: Array<IPlayer>
    }
}

export interface IfetchingPlayers extends Action {
    type: FETCHING_PLAYERS,
    payload: {
        fetching: boolean | null
    }
}

export interface IErrorPlayerRequest extends Action {
    type: ERROR_PLAYERS_REQUEST
}

// Down here, we'll create a discriminated union type of all actions which will be used for our reducer.
export type PlayerActions = IsetPlayers | IfetchingPlayers | IErrorPlayerRequest;