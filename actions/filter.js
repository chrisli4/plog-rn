import { createAction } from 'redux-actions';
import * as types from '../constants/filter';

export const addFilter = createAction(types.FILTER_ADD, (start, end) => ({
  start,
  end,
}));

export const removeFilter = createAction(types.FILTER_REMOVE);
