import { createSelector } from 'reselect';
import filterByDate from '../../utils/filter';

const getSelected = state => state.plants.selected;
const getTasks = state => state.tasks[state.plants.selected.id];
const getFilter = state => state.filter;
const getChartVisible = state => state.modals.chartVisible;

export const makeGetSelected = () =>
  createSelector(
    [getSelected],
    selected => selected
  );

export const makeGetVisibleTasks = () =>
  createSelector(
    [getTasks, getFilter],
    (tasks, filter) => filterByDate(tasks, filter.start, filter.end)
  );

export const makeGetChartVisible = () =>
  createSelector(
    [getChartVisible],
    visible => visible
  );
