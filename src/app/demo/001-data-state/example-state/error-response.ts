import { type DataState } from 'src/data-state';

export const errorResponseState: DataState = {
  data: undefined,
  initializedAt: '2024-09-11T06:40:12+0200',
  loading: false,
  error: { message: 'The data was not found', statusCode: 404 },
}
