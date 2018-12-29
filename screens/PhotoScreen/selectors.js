import { createSelector } from 'reselect';
import filterByDate from '../../utils/filter';

const getSelected = state => state.plants.selected;
const getPhotos = state => state.photos[state.plants.selected.id];
const getFilter = state => state.filter;
const getDeleteIds = state => state.remove.photos;
const getRemoveStatus = state => state.remove.enabled;

export const makeGetRemoveStatus = () =>
  createSelector(
    [getRemoveStatus],
    status => status
  );

export const makeGetSelected = () =>
  createSelector(
    [getSelected],
    selected => selected
  );

export const makeGetDeleteIds = () =>
  createSelector(
    [getDeleteIds],
    ids => ids
  );

export const makeGetVisiblePhotos = () =>
  createSelector(
    [getPhotos, getFilter],
    (photos, filter) => filterByDate(photos, filter.start, filter.end)
  );
