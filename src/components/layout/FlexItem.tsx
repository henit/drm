'use client';
import React from 'react';
import bemClass from '@henit/bem-class';
import './FlexItem.scss';

const block = bemClass('flex-item');

export interface FlexItemProps {
  className?: string;
  children: React.ReactNode;
}

export function FlexItem({ className, children }: FlexItemProps) {
  const cn = block([className]);

  return <div className={cn}>{children}</div>;
}
