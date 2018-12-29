import { createSelector } from 'reselect';
import filterByDate from '../../utils/filter';

const getPlants = state => state.plants;
const getFilter = state => state.filter;
const getDeleteIds = state => state.remove.plants;
const getRemoveStatus = state => state.remove.enabled;

export const makeGetDeleteIds = () =>
  createSelector(
    [getDeleteIds],
    ids => ids
  );

export const makeGetRemoveStatus = () =>
  createSelector(
    [getRemoveStatus],
    status => status
  );

export const makeGetVisiblePlants = () =>
  createSelector(
    [getPlants, getFilter],
    (plants, filter) => filterByDate(plants, filter.start, filter.end)
  );
