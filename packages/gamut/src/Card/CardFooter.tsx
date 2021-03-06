import React, { ReactNode } from 'react';
import cx from 'classnames';
import s from './styles/CardFooter.module.scss';

const defaultProps = {
  border: 'none',
  align: 'left',
  flex: true,
  standardPadding: true,
  standardHeight: true,
};

export type CardFooterProps = {
  align?: 'center' | 'left' | 'right';
  border?: 'dashed' | 'none' | 'solid';
  children: ReactNode;
  className?: string;
  flex?: boolean;
  standardHeight?: boolean;
  standardPadding?: boolean;
};

export const CardFooter = ({
  children,
  border,
  align,
  flex,
  standardPadding,
  standardHeight,
  className,
}: CardFooterProps) => {
  const footerClasses = cx(
    s.footer,
    {
      [s.flex]: flex,
      [s.solidTopBorder]: border === 'solid',
      [s.dashedTopBorder]: border === 'dashed',
      [s.transparentTopBorder]: border === 'none',
      [s.leftAlign]: align === 'left',
      [s.centerAlign]: align === 'center',
      [s.rightAlign]: align === 'right',
      [s.standardPadding]: standardPadding,
      [s.standardHeight]: standardHeight,
    },
    className
  );

  return <div className={footerClasses}>{children}</div>;
};

CardFooter.defaultProps = defaultProps;

export default CardFooter;
