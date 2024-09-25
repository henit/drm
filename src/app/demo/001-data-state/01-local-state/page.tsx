'use client';
import React, { useState, useCallback } from 'react';
import { type DataState } from 'src/data-state';
import { PageMain } from 'src/components/page';
import { FlexRow } from 'src/components/layout';
import { Button } from 'src/components/navigation';
import { initialState1, pendingState, fulfilledState, errorResponseState } from '../example-state';
import { DataStateError, Loading } from 'src/components/data-state';
import { DataSource } from 'src/components/data-state/DataSource';

export default function LocalStatePage() {
  const [localState, setLocalState] = useState<DataState>(initialState1);

  const setInitial = useCallback(() => setLocalState(initialState1), []);
  const setPending = useCallback(() => setLocalState(pendingState), []);
  const setFulfilled = useCallback(() => setLocalState(fulfilledState), []);
  const setErrorResponse = useCallback(() => setLocalState(errorResponseState), []);

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
    </PageMain>
  );
}
