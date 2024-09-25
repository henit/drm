'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { Page, PageSidebar } from 'src/components/page';
import { Nav, NavItem } from 'src/components/navigation';
import { store } from './redux-store';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <Provider store={store}>
    <Page>
      <PageSidebar>
        <h3>Demos</h3>
        <Nav>
          <NavItem route="/demo/001-data-state/01-local-state">Local state</NavItem>
          <NavItem route="/demo/001-data-state/02-use-data-state">useDataState</NavItem>
          <NavItem route="/demo/001-data-state/03-redux-state">Redux state</NavItem>
          <NavItem route="/demo/001-data-state/04-redux-hook-callbacks-1">Redux hook callbacks</NavItem>
          <NavItem route="/demo/001-data-state/05-redux-hook-callbacks-2">Individual redux hooks</NavItem>
        </Nav>
      </PageSidebar>
      {children}
    </Page>
  </Provider>;
}
