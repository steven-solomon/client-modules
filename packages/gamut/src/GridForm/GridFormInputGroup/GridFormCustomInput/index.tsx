import React from 'react';
import { FormContextValues } from 'react-hook-form';

import { GridFormCustomField } from '../../types';

export type GridFormCustomInputProps = {
  className?: string;
  field: GridFormCustomField;
  register: FormContextValues['register'];
};

export const GridFormCustomInput: React.FC<GridFormCustomInputProps> = ({
  className,
  field,
  register,
}) => {
  return field.render({ className, field, register });
};

export default GridFormCustomInput;
