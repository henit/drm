import { DataError } from './DataError';

export interface DataState<D = unknown> {
  data?: D;
  initializedAt?: string;
  loading: boolean;
  loadedAt?: string;
  changedAt?: string;
  error?: DataError;
}
