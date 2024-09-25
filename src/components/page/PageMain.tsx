'use client';
import React from 'react';
import bemClass from '@henit/bem-class';
import './PageMain.scss';

const block = bemClass('page-main');

interface Props {
  children?: React.ReactNode;
}

export function PageMain({ children }: Props) {
  return <main className={block()}>{children}</main>;
}
