import React from 'react';

import { Button } from '../../Button';
import {
  Column,
  ColumnSizes,
  ResponsiveProperty,
  OptionalResponsiveProperty,
  OffsetColumnSizes,
} from '../../Layout';
import styles from './styles.module.scss';

export type GridFormSubmitProps = {
  contents: React.ReactNode;
  offset?: OptionalResponsiveProperty<OffsetColumnSizes>;
  size?: ResponsiveProperty<ColumnSizes>;
};

export const GridFormSubmit: React.FC<GridFormSubmitProps> = ({
  contents,
  offset,
  size,
}) => {
  return (
    <Column offset={offset} size={size}>
      <Button className={styles.button} theme="brand-purple" type="submit">
        {contents}
      </Button>
    </Column>
  );
};

export default GridFormSubmit;
