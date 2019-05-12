import { Action } from 'redux'

export const SET_FILTERS = '@@players/SET_FILTERS';
export type SET_FILTERS = typeof SET_FILTERS;

// Filters type
export interface IFilterPlayer {
    name: string,
    position: string,
    age: string
}

export interface IsetFilterPlayers extends Action {
    type: SET_FILTERS,
    payload: {
        filterPlayers: IFilterPlayer
    }
}

// Down here, we'll create a discriminated union type of all actions which will be used for our reducer.
export type FilterPlayerActions = IsetFilterPlayers;