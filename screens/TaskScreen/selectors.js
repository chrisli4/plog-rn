import { createSelector } from 'reselect';
import filterByDate from '../../utils/filter';

const getSelected = state => state.plants.selected;
const getTasks = state => state.tasks[state.plants.selected.id];
const getFilter = state => state.filter;
const getDeleteIds = state => state.remove.tasks;

export const makeGetSelected = () =>
  createSelector(
    [getSelected],
    selected => selected
  )

export const makeGetDeleteIds = () => 
  createSelector(
    [getDeleteIds],
    ids => ids
  )

export const makeGetVisibleTasks = () =>
  createSelector(
    [getTasks, getFilter],
    (tasks, filter) => filterByDate(tasks, filter.start, filter.end)
  );

