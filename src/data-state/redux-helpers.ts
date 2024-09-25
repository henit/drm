'use client';
import { PayloadAction } from '@reduxjs/toolkit';
import { DataState } from './DataState';
import { DataError } from './DataError';

export type LoadAction<D = unknown> = PayloadAction<D>;

export function loadReducer() {
  return <D>(state: DataState<D>, action: LoadAction<D>): DataState<D> => {
    return {
      ...state,
      data: action.payload,
      loadedAt: new Date().toISOString(),
      error: undefined,
    };
  };
}

export function pendingReducer() {
  return <D>(state: DataState<D>): DataState<D> => {
    return {
      ...state,
      loading: true,
      error: undefined,
    };
  };
}

export type FulfilledAction<D = unknown> = PayloadAction<D>;

export function fulfilledReducer() {
  return <D>(state: DataState<D>, action: FulfilledAction<D>): DataState<D> => {
    return {
      ...state,
      data: action.payload,
      loading: false,
      loadedAt: new Date().toISOString(),
      error: undefined,
    };
  };
}

export type RejectedAction<E = unknown> = PayloadAction<E>;

export function rejectedReducer() {
  return <D>(state: DataState<D>, action: RejectedAction<DataError>): DataState<D> => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  };
}

export function initializeReducer() {
  return <D>(state: DataState<D>): DataState<D> => {
    return {
      ...state,
      data: undefined,
      loading: false,
      loadedAt: undefined,
      initializedAt: new Date().toDateString(),
      error: undefined,
    };
  };
}
