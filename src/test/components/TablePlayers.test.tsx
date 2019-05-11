import * as React from 'react';
import * as enzyme from 'enzyme';
import '../setupTest';
import TablePlayers from '../../components/TablePlayers';

const { mount } = enzyme;

describe('Basic Table rules', () => {
    it('There should be ONLY 1 table element', () => {
        const wrapper = mount(<TablePlayers />);
        // There should be ONLY 1 table element
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
    });
    it('The table should have ONLY 1 thead element', () => {
        const wrapper = mount(<TablePlayers />);
        const table = wrapper.find('table');
        const thead = table.find('thead');
        expect(thead).toHaveLength(1);
    });
    it('The table should have ONLY 1 tbody tag', () => {
        const wrapper = mount(<TablePlayers />);
        const table = wrapper.find('table');
        const tbody = table.find('tbody');
        expect(tbody).toHaveLength(1);
    });
});
