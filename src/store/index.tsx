import { combineReducers, Reducer } from 'redux';

// Import your state types and reducers here.
import { IPlayersReducer, players } from './players/reducer';
import { IFilterPlayersReducer, filterPlayers } from './filters/reducer';
// The top-level state object
export interface ApplicationState {
    players: IPlayersReducer,
    filterPlayers: IFilterPlayersReducer
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    players,
    filterPlayers
})