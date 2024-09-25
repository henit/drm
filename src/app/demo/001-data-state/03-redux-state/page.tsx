'use client';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageMain } from 'src/components/page';
import { FlexRow } from 'src/components/layout';
import { Button } from 'src/components/navigation';
import { fulfilledState } from '../example-state';
import { DataStateError, Loading } from 'src/components/data-state';
import { DataSource } from 'src/components/data-state/DataSource';
import { load, pending, fulfilled, rejected, initialize } from '../redux-state';
import { RootState } from '../redux-store';

export default function ReduxStatePage() {
  const dispatch = useDispatch();

  const reduxState = useSelector((state: RootState) => state.exampleState);

  const reduxLoad = useCallback(() => dispatch(load({ number: Math.random() })), []);
  const reduxPending = useCallback(() => dispatch(pending()), []);
  const reduxFulfilled = useCallback(() => dispatch(fulfilled(fulfilledState)), []);
  const reduxRejected = useCallback(() => dispatch(rejected({ message: 'This is wrong!' })), []);
  const reduxInitialize = useCallback(() => dispatch(initialize()), []);

  return (
    <PageMain>
      <h1>Data State</h1>
      <h3>Redux State</h3>

      <FlexRow gap="xx-small" marginBottom="small">
        <Button onClick={reduxLoad}>Initial</Button>
        <Button onClick={reduxPending}>Pending</Button>
        <Button onClick={reduxFulfilled}>Fulfilled</Button>
        <Button onClick={reduxRejected}>Rejected</Button>
        <Button onClick={reduxInitialize}>Initialize</Button>
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
