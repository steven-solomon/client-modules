import { mount } from 'enzyme';
import React from 'react';
import SplitInterstitial from '..';

describe('SplitInterstitial', () => {
  it('renders right and left children in that order', () => {
    const left = <span>one</span>;
    const right = <span>two</span>;

    const wrapped = mount(
      <SplitInterstitial
        left={{ children: left }}
        right={{ children: right }}
      />
    );

    expect(wrapped.text()).toEqual('twoone');
  });
});
