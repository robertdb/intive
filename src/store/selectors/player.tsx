import { createSelector } from 'reselect';;
import { ApplicationState } from '../';
import { IFilterPlayersReducer } from '../filters/reducer';
import { IPlayersReducer } from '../players/reducer';

export const player = (state: ApplicationState) => state.players;

export const filter = (state: ApplicationState) => state.filterPlayers;

export const selectotPlayers = createSelector(player, filter, (players: IPlayersReducer, filterPlayers: IFilterPlayersReducer) => {
    let items = [...players.players];
    if (filterPlayers.name !== 'all') {
        items = items.filter(i => i.name.includes(filterPlayers.name))
    }
    if (filterPlayers.position !== 'all') {
        items = items.filter(i => i.name === filterPlayers.position)
    }
    if (filterPlayers.age !== 'all') {
        items = items.filter(i => i.name === filterPlayers.age)
    }
    return items;
});