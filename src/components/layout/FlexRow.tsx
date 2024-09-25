'use client';
import React from 'react';
import bemClass from '@henit/bem-class';
import { FlexContainer, FlexContainerProps } from './FlexContainer';

const block = bemClass('flex-row');

export interface FlexRowProps extends Omit<FlexContainerProps, 'direction'> {
  className?: string;
  children: React.ReactNode;
}

export function FlexRow({ className, children, ...props }: FlexRowProps) {
  const cn = block([className]);

  return (
    <FlexContainer className={cn} direction="row" {...props}>
      {children}
    </FlexContainer>
  );
}
