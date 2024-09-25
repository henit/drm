import { type PayloadAction, Reducer, UnknownAction, createSlice } from '@reduxjs/toolkit';
import { type DataState, type DataError } from 'src/data-state';
import { initial } from 'src/data-state/utils';
import { loadReducer, pendingReducer, fulfilledReducer, rejectedReducer, initializeReducer } from 'src/data-state/redux-helpers';

interface SomeData { }

type ReduxExampleState = DataState<SomeData>;

const initialState: ReduxExampleState = initial();

export const reduxExampleSlice = createSlice({
  name: 'reduxExample',
  initialState,
  reducers: {
    // load: (state, action: PayloadAction<SomeData>) => {
    //   return {
    //     ...state,
    //     data: action.payload,
    //     loadedAt: new Date().toISOString(),
    //   };
    // },
    // pending: (state) => {
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // },
    // fulfilled: (state, action: PayloadAction<SomeData>) => {
    //   return {
    //     ...state,
    //     data: action.payload,
    //     loading: false,
    //     loadedAt: new Date().toISOString(),
    //   };
    // },
    // rejected: (state, action: PayloadAction<DataError>) => {
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    // },
    // initialize: (state) => {
    //   return {
    //     ...state,
    //     data: undefined,
    //     loaded: false,
    //     loadedAt: undefined,
    //     initializedAt: new Date().toDateString(),
    //   }
    // }
    load: loadReducer(),
    pending: pendingReducer(),
    fulfilled: fulfilledReducer(),
    rejected: rejectedReducer(),
    initialize: initializeReducer(),
  },
});

export const { load, pending, fulfilled, rejected, initialize } = reduxExampleSlice.actions;
