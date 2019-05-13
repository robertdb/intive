import * as React from 'react';
import * as enzyme from 'enzyme';
import '../../setupTest';
import { PlayerForm, InnerForm, MyFormValues } from '../../../components/Forms/PlayerForm';

const { mount } = enzyme;

describe('Input should be update properly', () => {
  test('should name works', () => {
    const name = 'name', value = 'yuri'
    let wrapper = mount(<PlayerForm setFilterPlayers={(filters: MyFormValues )=> null}/>);
    wrapper
      .find(`input[name="${name}"]`)
      .simulate('change', { target: { name, value } })
    wrapper.update();
    expect(wrapper.find(InnerForm).props().values[name]).toBe('yuri')
  })
  test('should age works', () => {
    const age = 'age', value = 18;
    let wrapper = mount(<PlayerForm setFilterPlayers={(filters: MyFormValues )=> null}/>);
    wrapper
      .find(`input[name="${age}"]`)
      .simulate('change', { target: { name, value } })
    wrapper.update();
    expect(wrapper.find(InnerForm).props().values[name]).toBe(value)
  })
})

describe('My form default should work fine', () => {
  let wrapper: enzyme.ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    wrapper = mount(<PlayerForm setFilterPlayers={(filters: MyFormValues )=> null}/>);
  });

  test('should position default value exists', () => {
    const name = 'position', value = 'position';
    wrapper
      .find('SelectPosition')
      .simulate('change', { target: { name, value } })
    expect(wrapper.find(InnerForm).props().values[name]).toBe(value)
  })
})

describe('My form should be update properly', () => {
  let wrapper: enzyme.ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    const positions = [
      {value: "striker", content: "Striker"}, 
      {value: "goalkepper", content: "Goalkepper"}
    ];
    wrapper = mount(<PlayerForm positions={positions} setFilterPlayers={(filters: MyFormValues )=> null}/>);
  });

  test('should position update to striker properly', () => {
    const name = 'position', value = 'striker';
    wrapper
      .find('SelectPosition')
      .simulate('change', { target: { name, value } })
    expect(wrapper.find(InnerForm).props().values[name]).toBe(value)
  })
})

describe('Submit should work properly', () => {

  test('submits the form', () => {
    let wrapper = mount(<PlayerForm setFilterPlayers={(filters: MyFormValues )=> null}/>);
    expect(wrapper.find(InnerForm).find('#submitting')).toHaveLength(0);

    // simulate submit event. this is always sync! async calls to setState are swallowed. 
    // be careful of false positives
    wrapper.find(InnerForm).find('Form').simulate('submit', {
      preventDefault: () => { } // no op 
    });
    // Because the simulated event is 100% sync, we can use it to test the synchronous changes
    // here. Any async stuff you do inside handleSubmit will be swallowed. Thus our UI
    // will see the following changes:
    // - isSubmitting -> true (even if you set it to false asynchronously in your handleSubmit)
    // - touched: all fields

    expect(wrapper.find(InnerForm).find('#submitting')).toHaveLength(1);
    expect(wrapper.find(InnerForm).find('ButtonSubmit').props().disabled).toBe(true)
    wrapper.unmount();
  })

})