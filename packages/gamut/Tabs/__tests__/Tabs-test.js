import React from 'react';
import { shallow, mount } from 'enzyme';

import Tabs from '../index';

describe('Accessible Tabs', () => {

  function generateTabConfig(num, isDefault) {
    return Array(num).fill().map((x, ind) => {
      const displayInd = ind + 1;
      return {
        text: 'Tab Number ' + displayInd,
        default: isDefault === ind
      };
    });
  }

  it('allows prop config to specify default tab and show appropriate tab panel', () => {

    const wrapper = shallow(
      <Tabs config={generateTabConfig(2)}>
        <div>Tab 1</div>
        <div>Tab 2</div>
      </Tabs>
    );

    expect(wrapper.find('.tab').at(0).props().active).toBe(true);
    expect(wrapper.find('.tabPanel').at(0).props().active).toBe(true);
    expect(wrapper.find('.tab').at(1).props().active).toBe(false);
    expect(wrapper.find('.tabPanel').at(1).props().active).toBe(false);

    const wrapper2 = shallow(
      <Tabs config={generateTabConfig(2, 1)}>
        <div>Tab 1</div>
        <div>Tab 2</div>
      </Tabs>
    );

    expect(wrapper2.find('.tab').at(0).props().active).toBe(false);
    expect(wrapper2.find('.tabPanel').at(0).props().active).toBe(false);
    expect(wrapper2.find('.tab').at(1).props().active).toBe(true);
    expect(wrapper2.find('.tabPanel').at(1).props().active).toBe(true);

  });

  it('does not render the contents of hidden tabs', () => {

    const wrapper = shallow(
      <Tabs config={generateTabConfig(2)}>
        <div>Tab 1</div>
        <div>Tab 2</div>
      </Tabs>
    );

    expect(wrapper.find('.tabPanel').at(0).children().html()).toBe('<div>Tab 1</div>');
    expect(wrapper.find('.tabPanel').at(1).children().html()).toBe('<div></div>');
  });

  it('Shows the correct tab panel on click, with proper tab highlighted via animated underline', () => {

    const wrapper = mount(
      <Tabs config={generateTabConfig(2)}>
        <div>Tab 1</div>
        <div>Tab 2</div>
      </Tabs>
    );

    // highlight first tab + show first tab panel initially
    expect(wrapper.find('.tab').at(0).props()['aria-selected']).toBe(true);
    expect(wrapper.find('.tabPanel').at(0).props().style.display).toBe(undefined);
    expect(wrapper.find('.tab').at(1).props()['aria-selected']).toBe(false);
    expect(wrapper.find('.tabPanel').at(1).props().style.display).toBe('none');
    expect(wrapper.find('.tabIndicator').props().style).toEqual({left: '0%', width: '50%'});

    // now the second tab is active
    wrapper.find('.tab').at(1).simulate('focus');

    expect(wrapper.find('.tab').at(0).props()['aria-selected']).toBe(false);
    expect(wrapper.find('.tabPanel').at(0).props().style.display).toBe('none');
    expect(wrapper.find('.tab').at(1).props()['aria-selected']).toBe(true);
    expect(wrapper.find('.tabPanel').at(1).props().style.display).toBe(undefined);
    expect(wrapper.find('.tabIndicator').props().style).toEqual({left: '50%', width: '50%'});

  });


  it('calls the onChange function provided in props when tabs change', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Tabs
        config={generateTabConfig(2)}
        onChange={onChange}
      >
        <div>Tab 1</div>
        <div>Tab 2</div>
      </Tabs>
    );
    wrapper.find('.tab').at(1).simulate('focus');

    expect(onChange.mock.calls.length).toBe(1);
  });

});