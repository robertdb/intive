import * as p from '../../../store/players/reducer';
import * as f from '../../../store/filters/reducer';
import {
    setFilterPlayerCreator,
} from '../../../store/filters/actions';
import {
    setPlayerCreator
} from '../../../store/players/actions';
import {
    selectotPlayers
} from '../../../store/selectors/player';

describe('Players selectors', () => {
    it('Should handle selector', () => {
        const mockPlayers = [{
            name: 'messi',
            position: 'striker',
            age: '32',
            nationality: 'Argentine'
        },
        {
            name: 'aguero',
            position: 'striker',
            age: '31',
            nationality: 'Argentine'
        }];

        const mockFilters = {
            name: 'messi',
            position: 'striker',
            age: '32'
        };

        let players = p.players(p.initialState, setPlayerCreator(mockPlayers));

        let filterPlayers = f.filterPlayers(f.initialState, setFilterPlayerCreator(mockFilters))

        let positions: any = [];

        let result = [{
            name: 'messi',
            position: 'striker',
            age: '32',
            nationality: 'Argentine'
        }];
        expect(selectotPlayers({ filterPlayers, players, positions })).toEqual(result)
    })
    it('Should return empty results, with diferent ages', () => {
        const mockPlayers = [{
            name: 'messi',
            position: 'striker',
            age: '30',
            nationality: 'Argentine'
        },
        {
            name: 'aguero',
            position: 'striker',
            age: '31',
            nationality: 'Argentine'
        }];

        const mockFilters = {
            name: 'messi',
            position: 'striker',
            age: '32'
        };

        let players = p.players(p.initialState, setPlayerCreator(mockPlayers));

        let filterPlayers = f.filterPlayers(f.initialState, setFilterPlayerCreator(mockFilters))

        let positions: any = [];

        let result: any = [];
        expect(selectotPlayers({ filterPlayers, players, positions })).toEqual(result)
    })
})