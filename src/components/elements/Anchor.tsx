'use client';
import React from 'react';
import bemClass from '@henit/bem-class';

const block = bemClass('anchor');

export interface AnchorProps {
  className?: string;
  href?: string;
  children: React.ReactNode;
}

export function Anchor({ className, href, children }: AnchorProps) {
  const cn = block([className]);

  return (
    <a className={cn} href={href}>
      {children}
    </a>
  );
}
