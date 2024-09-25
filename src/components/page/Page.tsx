'use client';
import React from 'react';
import bemClass from '@henit/bem-class';
import './Page.scss';

const block = bemClass('page');

interface Props {
  children: React.ReactNode;
}

export function Page({ children }: Props) {
  return <div className={block()}>{children}</div>;
}
