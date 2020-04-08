import { Input } from '@codecademy/gamut';
import React from 'react';
import { FormContextValues } from 'react-hook-form';

import { GridFormFileField } from '../../types';

export type GridFormFileInputProps = {
  className?: string;
  field: Omit<GridFormFileField, 'label'>;
  setValue: (value: string) => void;
  register: FormContextValues['register'];
};

export const GridFormFileInput: React.FC<GridFormFileInputProps> = ({
  className,
  field,
  register,
  setValue,
}) => {
  const onChange = (event: any) => {
    const files = event.target.value;
    const file = files.item(0);
    setValue(file.name);
  };
  return (
    <Input
      className={className}
      htmlFor={field.name}
      name={field.name}
      onChange={onChange}
      ref={register(field.validation)}
      type="file"
    />
  );
};

export default GridFormFileInput;
