import cx from 'classnames';
import React, { ReactHTML } from 'react';

import s from './styles.module.scss';

export type ContentContainerProps = {
  className?: string;
  as?: keyof ReactHTML;
  /** Toggle a containerWide className to be applied with no max-width and smaller padding */
  wide?: boolean;
};

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  className,
  as,
  wide = false,
}) => {
  const Element = as || 'div';
  const classes = cx(
    {
      [s.contentContainerWide]: wide,
    },
    s.contentContainer,
    className
  );

  return <Element className={classes}>{children}</Element>;
};

export default ContentContainer;
