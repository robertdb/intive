import {
    ActionCreator,
    AnyAction
} from 'redux';

import {
    ThunkAction,
    ThunkDispatch
} from 'redux-thunk';

import {
    IsetPositionsPlayers,
    PositionOption,
    SET_POSITIONS
} from './types';

export const setPositionPlayerCreator: ActionCreator<IsetPositionsPlayers> = (positionPlayers: Array<PositionOption>) => ({
    type: SET_POSITIONS,
    payload: {
        positionPlayers
    }
})

// THUNK ACTIONS
export const setPositionPlayer = (positionsPlayers: Array<PositionOption>): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch(setPositionPlayerCreator(positionsPlayers));
    }
}
