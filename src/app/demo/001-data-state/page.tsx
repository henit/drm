'use client';
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type DataState, useDataState, useReduxDataState } from 'src/data-state';
import { Page, PageMain, PageSidebar } from 'src/components/page';
import { FlexRow } from 'src/components/layout';
import { Nav, NavItem, Button } from 'src/components/navigation';

import { initialState1, pendingState, fulfilledState, errorResponseState } from './example-state';
import { DataStateError, Loading } from 'src/components/data-state';
import { DataSource } from 'src/components/data-state/DataSource';

import { load, pending, fulfilled, rejected, initialize } from './redux-state';
import { RootState } from './redux-store';

interface Props {
  children?: React.ReactNode;
}

export default function DemoPage({ children }: Props) {
  const dispatch = useDispatch();

  // Local state
  const [localState, setLocalState] = useState<DataState>(initialState1);
  //const [localState, isLoading] = useDataState();
  const { data: hookData, handleChange } = useDataState(initialState1);

  const setInitial = useCallback(() => setLocalState(initialState1), []);
  const setPending = useCallback(() => setLocalState(pendingState), []);
  const setFulfilled = useCallback(() => setLocalState(fulfilledState), []);
  const setErrorResponse = useCallback(() => setLocalState(errorResponseState), []);

  // Redux state
  const reduxState0 = useSelector((state: RootState) => state.exampleState);

  const reduxLoad = useCallback(() => dispatch(load({ number: Math.random() })), []);
  const reduxPending = useCallback(() => dispatch(pending()), []);
  const reduxFulfilled = useCallback(() => dispatch(fulfilled(fulfilledState)), []);
  const reduxRejected = useCallback(() => dispatch(rejected({ message: 'This is wrong!' })), []);
  const reduxInitialize = useCallback(() => dispatch(initialize()), []);

  // Redux hook
  const { handleLoad, handlePending, handleFulfilled, handleRejected, handleInitialize, ...reduxState } =
    useReduxDataState({
      selector: (state: RootState) => state.exampleState,
      actionCreators: {
        load,
        pending,
        fulfilled,
        rejected,
        initialize,
      },
    });
  // const { handleLoad, handlePending, handleFulfilled, handleRejected, handleInitialize, ...reduxState } =
  //   useExampleState();

  return (
    <PageMain>
      <h1>Data State</h1>

      <h3>Local State</h3>

      <FlexRow gap="xx-small" marginBottom="small">
        <Button onClick={setInitial}>Initial</Button>
        <Button onClick={setPending}>Pending</Button>
        <Button onClick={setFulfilled}>Fulfilled</Button>
        <Button onClick={setErrorResponse}>Error response</Button>
      </FlexRow>

      <DataSource state={localState}>
        <Loading>
          <DataStateError />

          <pre>{JSON.stringify(localState, null, 4)}</pre>
        </Loading>
      </DataSource>

      <h3>Hook and callbacks</h3>

      <FlexRow gap="xx-small" marginBottom="small">
        {/* Emulates callbacks from subcomponents */}
        <Button onClick={() => handleChange({ number: 'one' })}>One</Button>
        <Button onClick={() => handleChange({ number: 'two' })}>Two</Button>
        <Button onClick={() => handleChange({ number: 'three' })}>Three</Button>
      </FlexRow>

      <pre>{JSON.stringify(hookData, null, 4)}</pre>

      <h3>Redux State</h3>

      <FlexRow gap="xx-small" marginBottom="small">
        <Button onClick={reduxLoad}>Initial</Button>
        <Button onClick={reduxPending}>Pending</Button>
        <Button onClick={reduxFulfilled}>Fulfilled</Button>
        <Button onClick={reduxRejected}>Rejected</Button>
        <Button onClick={reduxInitialize}>Initialize</Button>
      </FlexRow>

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
