import { DataState } from './DataState';

export function initial<D>(): DataState<D> {
  return {
    loading: false,
  };
}
