'use client';
import { useContext, useState, useCallback } from 'react';
import { useUpdateEffect } from 'react-use';
import { DataState } from './DataState';
import { DataSourceContext } from 'src/components/data-state';
import { initial } from './utils';

interface AdditionalReturn<D> {
  handleChange: (data: D) => void;
}

export function useDataState<D>(externalDataState?: DataState<D>): DataState<D> & AdditionalReturn<D> {
  const dataSource = useContext(DataSourceContext);
  const [dataState, setDataState] = useState<DataState<D>>(externalDataState ?? (dataSource?.state as DataState<D>) ?? initial());

  useUpdateEffect(() => {
    if (externalDataState) {
      setDataState(externalDataState);
    }
  }, [externalDataState]);

  useUpdateEffect(() => {
    if (dataSource?.state) {
      setDataState(dataSource?.state as DataState<D>);
    }
  }, [dataSource]);

  // Callbacks

  const handleChange = useCallback((data: D) => {
    setDataState({
      ...dataState,
      data
    });
  }, []);

  return {
    ...dataState,
    handleChange
  };
}
