import { createSelector } from 'reselect';

const getSelected = state => state.plants.selected;
const getScreen = state => state.screen.current;
const getRemoveStatus = state => state.remove.enabled;

export const makeGetSelected = () =>
  createSelector(
    [getSelected],
    selected => selected
  );

export const makeGetScreen = () => 
  createSelector(
    [getScreen],
    screen => screen
  );

export const makeGetRemoveStatus = () =>
  createSelector(
    [getRemoveStatus],
    status => status
  );