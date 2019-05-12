import { Action } from 'redux'

export const SET_POSITIONS = '@@positions/SET_POSITIONS';
export type SET_POSITIONS = typeof SET_POSITIONS;

// Positions type
export interface PositionOption {
    value: string,
    content: string
}

export interface IsetPositionsPlayers extends Action {
    type: SET_POSITIONS,
    payload: {
        positionPlayers: Array<PositionOption> | []
    }
}

// Down here, we'll create a discriminated union type of all actions which will be used for our reducer.
export type PositionPlayerActions = IsetPositionsPlayers;