'use client';
import React, { useMemo } from 'react';
import { type DataState } from 'src/data-state';
import { DataSourceContext, DataSourceContextState } from './DataSourceContext';
import { initial } from 'src/data-state/utils';

export interface DataSourceProps {
  state?: DataState;
  children?: React.ReactNode;
}

export function DataSource({ state, children }: DataSourceProps) {
  const contextValue = useMemo<DataSourceContextState>(
    () => ({
      state: state ?? initial(),
    }),
    [state]
  );

  return <DataSourceContext.Provider value={contextValue}>{children}</DataSourceContext.Provider>;
}
