import {
    ActionCreator,
    AnyAction
} from 'redux';

import {
    ThunkAction,
    ThunkDispatch
} from 'redux-thunk';

import {
    IsetFilterPlayers,
    IFilterPlayer,
    SET_FILTERS
} from './types';

export const setFilterPlayerCreator: ActionCreator<IsetFilterPlayers> = (filterPlayers: IFilterPlayer) => ({
    type: SET_FILTERS,
    payload: {
        filterPlayers
    }
})

// THUNK ACTIONS
export const setFilterPlayers = (filterPlayers: IFilterPlayer): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch(setFilterPlayerCreator(filterPlayers));
    }
}
