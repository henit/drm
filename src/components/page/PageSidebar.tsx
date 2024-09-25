'use client';
import React from 'react';
import bemClass from '@henit/bem-class';
import { Nav, NavItem } from 'src/components/navigation';
import './PageSidebar.scss';

interface Props {
  children?: React.ReactNode;
}

const block = bemClass('page-sidebar');

export function PageSidebar({ children }: Props) {
  return (
    <aside className={block()}>
      {children ??
        <>
          <h3>Demos</h3>

          <Nav>
            <NavItem route="/demo/001-data-state">Data State</NavItem>
          </Nav>
        </>
      }
    </aside>
  );
}
