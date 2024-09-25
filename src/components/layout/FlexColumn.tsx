'use client';
import React from 'react';
import bemClass from '@henit/bem-class';
import { FlexContainer, FlexContainerProps } from './FlexContainer';

const block = bemClass('flex-column');

export interface FlexColumnProps extends Omit<FlexContainerProps, 'direction'> {
  className?: string;
  children: React.ReactNode;
}

export function FlexColumn({ className, children, ...props }: FlexColumnProps) {
  const cn = block([className]);

  return (
    <FlexContainer className={cn} direction="column" {...props}>
      {children}
    </FlexContainer>
  );
}
