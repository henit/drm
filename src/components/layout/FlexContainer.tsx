'use client';
import React from 'react';
import bemClass from '@henit/bem-class';
import { SpacingValue } from 'src/components/layout/spacing';
import './FlexContainer.scss';

const block = bemClass('flex-container');

export interface FlexContainerProps {
  className?: string;
  direction?: 'row' | 'column';
  gap?: SpacingValue;
  // @TODO full set of spacing props
  marginTop?: SpacingValue;
  marginBottom?: SpacingValue;
  children: React.ReactNode;
}

export function FlexContainer({
  className,
  direction = 'column',
  gap,
  marginTop,
  marginBottom,
  children,
}: FlexContainerProps) {
  const cn = block({ direction, gap, marginTop, marginBottom }, [className]);

  return <div className={cn}>{children}</div>;
}
