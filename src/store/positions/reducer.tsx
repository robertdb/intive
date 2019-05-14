import {
    PositionOption,
    SET_POSITIONS,
    PositionPlayerActions
} from './types';

export interface IPositionPlayersReducer {
    positionPlayers: Array<PositionOption> | []
}

export const initialState: IPositionPlayersReducer = {
    positionPlayers: []
}

export const positions = (state: IPositionPlayersReducer = initialState, action: PositionPlayerActions): IPositionPlayersReducer => {
    switch (action.type) {
        case SET_POSITIONS:
            return {
                ...state,
                positionPlayers: action.payload.positionPlayers
            }
    }
    return state
}
