'use client';
import React from 'react';
import { Page, PageMain, PageSidebar } from 'src/components/page';

export default function RootPage() {
  return (
    <Page>
      <PageSidebar />
      <PageMain>Hello, Next.js!</PageMain>
    </Page>
  );
}
