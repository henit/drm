'use client';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCreator, UnknownAction } from '@reduxjs/toolkit';
import { DataState } from './DataState';
import { DataError } from './DataError';
import { LoadAction, FulfilledAction, RejectedAction } from './redux-helpers';

interface Arg<D, S> {
  selector: (state: S) => DataState<D>,
  actionCreators?: {
    load?: ActionCreator<LoadAction<D>>;
    pending?: ActionCreator<UnknownAction>;
    fulfilled?: ActionCreator<FulfilledAction<D>>;
    rejected?: ActionCreator<RejectedAction<D>>;
    initialize?: ActionCreator<UnknownAction>;
  }

}

interface AdditionalReturn<D> {
  handleLoad?: (data: D) => void;
  handlePending?: () => void;
  handleFulfilled?: (data: D) => void;
  handleRejected?: (error: DataError) => void;
  handleInitialize?: () => void;
}

export function useReduxDataState<D, S>({ selector, actionCreators = {} }: Arg<D, S>): DataState<D> & AdditionalReturn<D> {
  const dispatch = useDispatch();
  const dataState = useSelector(selector);

  // Callbacks
  const {
    load,
    pending,
    fulfilled,
    rejected,
    initialize,
  } = actionCreators;

  const handleLoad = useMemo(() => load && ((data: unknown) => dispatch(load(data))), [dispatch, load]);
  const handlePending = useMemo(() => pending && (() => dispatch(pending())), [dispatch, pending]);
  const handleFulfilled = useMemo(() => fulfilled && ((data: unknown) => dispatch(fulfilled(data))), [dispatch, fulfilled]);
  const handleRejected = useMemo(() => rejected && ((error: DataError) => dispatch(rejected(error))), [dispatch, rejected]);
  const handleInitialize = useMemo(() => initialize && (() => dispatch(initialize())), [dispatch, initialize]);

  return {
    ...dataState,
    handleLoad,
    handlePending,
    handleFulfilled,
    handleRejected,
    handleInitialize
  };
}
