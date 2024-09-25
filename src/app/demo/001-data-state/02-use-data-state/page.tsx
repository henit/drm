'use client';
import React from 'react';
import { useDataState } from 'src/data-state';
import { PageMain } from 'src/components/page';
import { FlexRow } from 'src/components/layout';
import { Button } from 'src/components/navigation';
import { initialState1 } from '../example-state';

export default function UseDataStatePage() {
  const { data: hookData, handleChange } = useDataState(initialState1);

  return (
    <PageMain>
      <h1>Data State</h1>
      <h3>Hook and callbacks</h3>

      <FlexRow gap="xx-small" marginBottom="small">
        {/* Emulates callbacks from subcomponents */}
        <Button onClick={() => handleChange({ number: 'one' })}>One</Button>
        <Button onClick={() => handleChange({ number: 'two' })}>Two</Button>
        <Button onClick={() => handleChange({ number: 'three' })}>Three</Button>
      </FlexRow>

      <pre>{JSON.stringify(hookData, null, 4)}</pre>
    </PageMain>
  );
}
