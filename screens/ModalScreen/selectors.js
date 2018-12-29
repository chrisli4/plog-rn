import { createSelector } from 'reselect';

const getSelected = state => state.plants.selected;
const getCalendarVisible = state => state.modals.calendarVisible;
const getTaskVisible = state => state.modals.taskVisible;
const getPlantVisible = state => state.modals.plantVisible;
const getStart = state => state.filter.start;
const getEnd = state => state.filter.end;
const getPlant = state => state.modals.plant;

export const makeGetPlant = () =>
  createSelector(
    [getPlant],
    plant => plant
  );

export const makeGetEnd = () =>
  createSelector(
    [getEnd],
    end => end
  );

export const makeGetStart = () =>
  createSelector(
    [getStart],
    start => start
  );

export const makeGetSelected = () =>
  createSelector(
    [getSelected],
    selected => selected
  );

export const makeGetCalendarVisible = () =>
  createSelector(
    [getCalendarVisible],
    visible => visible
  );

export const makeGetTaskVisible = () =>
  createSelector(
    [getTaskVisible],
    visible => visible
  );

export const makeGetPlantVisible = () =>
  createSelector(
    [getPlantVisible],
    visible => visible
  );
