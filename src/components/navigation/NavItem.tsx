'use client';
import React from 'react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'
import bemClass from '@henit/bem-class';
import { Anchor } from 'src/components/elements';
import './NavItem.scss';

const block = bemClass('nav-item');

export interface NavItemProps {
  className?: string;
  route?: string;
  children: React.ReactNode;
}

export function NavItem({ className, route, children }: NavItemProps) {
  const pathname = usePathname();
  const active = pathname === route;
  const cn = block({ active }, [className]);

  return (
    <Anchor className={cn} href={route}>
      {children}
    </Anchor>
  );
}
