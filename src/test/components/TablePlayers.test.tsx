import * as React from 'react';
import * as enzyme from 'enzyme';
import '../setupTest';
import TablePlayers from '../../components/TablePlayers';

const { mount, shallow } = enzyme;

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<TablePlayers players={[]} />);

        expect(component).toMatchSnapshot();
    });
});

describe('Basic Table rules', () => {
    it('There should be ONLY 1 table element', () => {
        const wrapper = mount(<TablePlayers players={[]} />);
        // There should be ONLY 1 table element
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
    });
    it('The table should have ONLY 1 thead element', () => {
        const wrapper = mount(<TablePlayers players={[]} />);
        const table = wrapper.find('table');
        const thead = table.find('thead');
        expect(thead).toHaveLength(1);
    });
    it('The table should have ONLY 1 tbody tag', () => {
        const wrapper = mount(<TablePlayers players={[]} />);
        const table = wrapper.find('table');
        const tbody = table.find('tbody');
        expect(tbody).toHaveLength(1);
    });
});

describe('Table player should render data always', () => {
    it('There should be ONLY 1 Tr in tbody element with empty array', () => {
        const wrapper = mount(<TablePlayers players={[]} />);
        const table = wrapper.find('table');
        const tbody = table.find('tbody');
        const tr = tbody.find('tr');
        expect(tr).toHaveLength(1);
    });
    it('There should be ONLY 1 Tr in tbody element with empty array', () => {
        const data = [{ name: 'messi', position: "striker", nationality: "argentine", age: "32" }]
        const wrapper = mount(<TablePlayers players={data} />);
        const table = wrapper.find('table');
        const tbody = table.find('tbody');
        const tr = tbody.find('tr');
        expect(tr).toHaveLength(1);
    });
});

