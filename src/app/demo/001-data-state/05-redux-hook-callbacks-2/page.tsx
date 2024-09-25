'use client';
import React from 'react';
import { PageMain } from 'src/components/page';
import { useExampleState } from '../useExampleState';

export default function ReduxHookCallbacks2Page() {
  const {
    handleLoad,
    handlePending,
    handleFulfilled,
    handleRejected,
    handleInitialize,
    ...reduxState
  } = useExampleState();

  return (
    <PageMain>
      ...
    </PageMain>
  );
}
