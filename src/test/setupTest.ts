import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

export default enzyme.configure({ adapter: new Adapter() });