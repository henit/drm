'use client';
import React from 'react';
import bemClass from '@henit/bem-class';
import './Button.scss';

const block = bemClass('button');

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({ className, onClick, children }: ButtonProps) {
  const cn = block([className]);

  return (
    <button className={cn} onClick={onClick}>
      {children}
    </button>
  );
}
