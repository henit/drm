'use client';
import React from 'react';
import bemClass from '@henit/bem-class';

const block = bemClass('nav');

export interface NavProps {
  className?: string;
  children: React.ReactNode;
}

export function Nav({ className, children }: NavProps) {
  const cn = block([className]);

  return <div className={cn}>{children}</div>;
}
