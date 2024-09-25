import { configureStore } from '@reduxjs/toolkit';
import { reduxExampleSlice } from './redux-state';

export const store = configureStore({
  reducer: {
    exampleState: reduxExampleSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
