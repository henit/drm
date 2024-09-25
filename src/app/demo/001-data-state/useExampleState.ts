import { RootState } from './redux-store';
import { useReduxDataState } from 'src/data-state';
import { load, pending, fulfilled, rejected, initialize } from './redux-state';

export const useExampleState = () => useReduxDataState({
  selector: (state: RootState) => state.exampleState,
  actionCreators: {
    load,
    pending,
    fulfilled,
    rejected,
    initialize
  },
});
