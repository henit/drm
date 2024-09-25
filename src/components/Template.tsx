'use client';
import React from 'react';
import bemClass from '@henit/bem-class';
// import './Template.scss';

const block = bemClass('template');

export interface TemplateProps {
  className?: string;
  children: React.ReactNode;
}

export function Template({ className, children }: TemplateProps) {
  const cn = block([className]);

  return <div className={cn}>{children}</div>;
}
