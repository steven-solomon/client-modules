import { mount } from 'enzyme';
import React from 'react';
import StepButton, { StepButtonProps } from '..';

/**
 * render the step button for these tests
 */
const renderStepBtn = (overrideProps: Partial<StepButtonProps>) => {
  const props: StepButtonProps = {
    type: 'up',
    onClick: () => {},
    labelledBy: '',
    ...overrideProps,
  };
  return mount(<StepButton {...props} />);
};

describe('<StepButton>', () => {
  it('shows the up chevron when used as an incrementer', () => {
    const wrapper = renderStepBtn({ type: 'up' });
    const icon = wrapper.find('svg');
    expect(icon.find('title')).toHaveText('Arrow Chevron Up Icon');
  });

  it('shows the down chevron when used as a decrementer', () => {
    const wrapper = renderStepBtn({ type: 'down' });
    const icon = wrapper.find('svg');
    expect(icon.find('title')).toHaveText('Arrow Chevron Down Icon');
  });

  it('processes the button click', () => {
    const onClick = jest.fn();
    const wrapper = renderStepBtn({ onClick });
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
