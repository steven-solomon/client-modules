import React, { ReactNode, HTMLAttributes } from 'react';
import cx from 'classnames';
import s from './styles/Radio.module.scss';

export type RadioProps = HTMLAttributes<HTMLInputElement> & {
  checked?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  id?: string;
  label?: ReactNode;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  tabIndex?: number;
  value?: string;
  readOnly?: boolean;
};

export const Radio: React.FC<RadioProps> = ({
  name,
  value,
  label,
  checked,
  className,
  disabled,
  htmlFor,
  onChange,
  required,
  ...rest
}) => {
  const classNames = cx(s.Radio, className);
  return (
    <div className={classNames}>
      <input
        className={s.radioInput}
        id={htmlFor}
        name={name}
        required={required}
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        value={value}
        {...rest}
      />
      <label htmlFor={htmlFor} className={s.radioLabel}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
