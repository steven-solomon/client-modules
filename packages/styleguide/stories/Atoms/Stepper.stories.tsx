import React from 'react';
import { InputStepper } from '@codecademy/gamut/src';
import { number, text } from '@storybook/addon-knobs';
import {
  decoratedStories,
  decoratedStory,
  StoryDescription,
  StoryTemplate,
  StoryStatus,
} from '../Templating';
import { useState } from '@storybook/addons';

export default decoratedStories('Atoms', InputStepper);

export const inputSteppers = decoratedStory(() => {
  // setup the knobs for this stepper
  const minimumKnob = number('Minimum', 0);
  const maximumKnob = number('Maximum', 999);
  const labelKnob = text('Label', 'things');

  // use standard state so we can show the onChange events on the
  // step buttons associated
  const [value, setValue] = useState(100);

  return (
    <StoryTemplate status={StoryStatus.Ready}>
      <StoryDescription>
        Input Steppers allow for finetuned control over numeric values. They
        override the default styles for numeric inputs.
        <br />
        <br />
        Steppers will default to a small size if selecting over values that are
        at most 1 digit, and choose a wider format sutable for 3 digits
        otherwise.
        <br />
        <br />
        Steppers are not appropriate for values larger than three digits.
      </StoryDescription>
      <InputStepper
        min={minimumKnob}
        max={maximumKnob}
        ariaLabel="input stepper"
        label={labelKnob}
        onChange={val => setValue(val)}
        value={value}
        onTrackButtonClick={() => null}
      />
    </StoryTemplate>
  );
});
