'use client';
import React from 'react';
import { useReduxDataState } from 'src/data-state';
import { PageMain } from 'src/components/page';
import { FlexRow } from 'src/components/layout';
import { Button } from 'src/components/navigation';
import { DataStateError, Loading } from 'src/components/data-state';
import { DataSource } from 'src/components/data-state/DataSource';
import { load, pending, fulfilled, rejected, initialize } from '../redux-state';
import { RootState } from '../redux-store';

export default function ReduxHookCallbacks1Page() {
  const {
    handleLoad,
    handlePending,
    handleFulfilled,
    handleRejected,
    handleInitialize,
    ...reduxState
  } = useReduxDataState({
    selector: (state: RootState) => state.exampleState,
    actionCreators: {
      load,
      pending,
      fulfilled,
      rejected,
      initialize
    },
  });

  return (
    <PageMain>
      <h1>Data State</h1>

      <h4>Redux hook callbacks</h4>

      <FlexRow gap="xx-small" marginBottom="small">
        {/* Emulates callbacks from subcomponents */}
        <Button onClick={() => handleLoad?.({ number: Math.random() })}>Hook load</Button>
        <Button onClick={handlePending}>Pending</Button>
        <Button onClick={() => handleFulfilled?.({ number: Math.random() })}>Fulfilled</Button>
        <Button onClick={() => handleRejected?.({ message: 'Nooooo...' })}>Rejected</Button>
        <Button onClick={handleInitialize}>Initialize</Button>
      </FlexRow>

      <DataSource state={reduxState}>
        <Loading>
          <DataStateError />

          <pre>{JSON.stringify(reduxState, null, 4)}</pre>
        </Loading>
      </DataSource>
    </PageMain>
  );
}
