import React from 'react';
import styles from './styles.module.scss';
import StepButton from './StepButton';
import cx from 'classnames';

export type InputStepperButtonTargets =
  | 'increase_selection'
  | 'decrease_selection';

export type InputStepperProps = {
  /** the label to show beneath the numeric value */
  label: string;

  /** the value to assign the numeric field */
  value: number;

  /** the maximum value allowed */
  max?: number;

  /** the minimum value allowed */
  min?: number;

  /** what action to perform when the value of this field has changed */
  onChange: (val: number) => void;

  /**
   * the label to use for accessibility purposes; will be read on the
   * input field itself, as well as the stepper buttons
   */
  ariaLabel: string;

  /** the tracking to run when the step buttons are clicked */
  onTrackButtonClick?: (target: InputStepperButtonTargets) => void;

  /** any additional styling that should be applied to the stepper */
  className?: string;
};

/**
 * renders a numeric step input with an embedded label and a custom set of step buttons
 */
export const InputStepper: React.FC<InputStepperProps> = ({
  label,
  value,
  max = 999,
  min = 0,
  onChange,
  ariaLabel,
  onTrackButtonClick,
  className,
}) => {
  // ensure the value that is set is a valid number
  const normalize = (value: number) => {
    if (max && value > max) {
      return max;
    }
    if (value < min) {
      return min;
    }
    return value;
  };

  // handle the step buttons being clicked
  const increment = (incrementAmount: 1 | -1) => {
    const incrementedValue = normalize(value + incrementAmount);
    if (onTrackButtonClick) {
      onTrackButtonClick(
        incrementAmount > 0 ? 'increase_selection' : 'decrease_selection'
      );
    }
    onChange(incrementedValue);
  };

  // handle normalizing and parsing on input change
  const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value || `${min}`;
    const normalizedValue = normalize(parseInt(rawValue));
    if (normalizedValue === value) {
      return;
    }
    onChange(normalizedValue);
  };

  // ensure that the value comes in normalized
  const normalizedValue = normalize(value);
  if (normalizedValue !== value) {
    window.setTimeout(() => onChange(normalizedValue), 0);
  }

  const inputId = 'inputStepper';
  const labelId = 'inputStepperLabel';

  // calculate the input class to use based off of the max
  // provided by the user
  let inputStyle = styles.standardWidth;
  if (max < 10) {
    inputStyle = styles.mini;
  } else if (max > 99) {
    inputStyle = styles.long;
  }

  return (
    <div className={className ? cx(styles.stepper, className) : styles.stepper}>
      <div className={styles.column}>
        {/** render the actual input field */}
        <input
          className={cx(styles.input, inputStyle)}
          type="number"
          max={max}
          min={min}
          value={normalizedValue}
          name={inputId}
          id={inputId}
          aria-live="polite"
          aria-labelledby={`${labelId} ${inputId}`}
          aria-label={`current value of ${value}`}
          onChange={onChangeEvent}
        />

        {/* render the label for the input field */}
        <label
          id={labelId}
          className={styles.label}
          aria-label={ariaLabel}
          htmlFor={inputId}
        >
          {label}
        </label>
      </div>

      {/** step up and step down buttons */}
      <div className={styles.column}>
        <StepButton
          onClick={() => increment(1)}
          type="up"
          labelledBy={`${labelId} ${inputId}`}
        />
        <StepButton
          onClick={() => increment(-1)}
          type="down"
          labelledBy={`${labelId} ${inputId}`}
        />
      </div>
    </div>
  );
};

export default InputStepper;
