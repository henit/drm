'use client';
import { createContext } from 'react';
import { type DataState } from 'src/data-state';
import { initial } from 'src/data-state/utils';

export interface DataSourceContextState {
  state: DataState
};

export const DataSourceContext = createContext<DataSourceContextState | undefined>(undefined);
