import React from 'react';
import styles from './styles.module.scss';
import StepButton from './StepButton';
import cx from 'classnames';

export type InputStepperButtonTargets =
  | 'increase_selection'
  | 'decrease_selection';

export interface InputStepperProps {
  label: string;
  value: number;
  max?: number;
  min?: number;
  onChange: (val: number) => void;
  ariaLabel: string;
  onTrackButtonClick?: (target: InputStepperButtonTargets) => void;

  // cusotmization options
  className?: string;
}

/**
 * renders a numeric step input with an embedded label and a custom set of step buttons
 */
const InputStepper: React.FC<InputStepperProps> = ({
  label,
  value,
  max,
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
    const rawValue = event.target.value;
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

  return (
    <div className={className ? cx(styles.stepper, className) : styles.stepper}>
      <div className={styles.column}>
        {/** render the actual input field */}
        <input
          className={cx(
            styles.input,
            max < 10 ? styles.mini : styles.standardWidth
          )}
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
        ></input>

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
