import {
    IFilterPlayer,
    SET_FILTERS,
    FilterPlayerActions
} from './types';

export interface IFilterPlayersReducer extends IFilterPlayer { };

export const initialState: IFilterPlayersReducer = {
    name: 'all',
    position: 'all',
    age: 'all'
}

export const filterPlayers = (state: IFilterPlayersReducer = initialState, action: FilterPlayerActions): IFilterPlayersReducer => {
    switch (action.type) {
        case SET_FILTERS:
            return {
                ...state,
                name: action.payload.filterPlayers.name,
                position: action.payload.filterPlayers.position,
                age: action.payload.filterPlayers.age,
            }
    }
    return state
}
