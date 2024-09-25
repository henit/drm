'use client';
import React, { useContext } from 'react';
import bemClass from '@henit/bem-class';
import { type DataState, DataError, useDataState } from 'src/data-state';
// import { DataSourceContext } from './DataSourceContext';
import './DataStateError.scss';

const block = bemClass('data-state-error');

export interface DataStateErrorProps {
  className?: string;
  error?: DataError;
  state?: DataState;
}

export function DataStateError({ className, error: errorProp, state }: DataStateErrorProps) {
  // const dataSource = useContext(DataSourceContext);
  // const error = errorProp ?? state?.error ?? dataSource?.state.error;
  const dataSource = useDataState();
  const error = errorProp ?? state?.error ?? dataSource?.error;

  if (!error) {
    return;
  }

  const cn = block([className]);

  return <div className={cn}>{error.message}</div>;
}
