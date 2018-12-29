import { createAction } from 'redux-actions';
import * as types from '../constants/modals';

export const openModalTask = createAction(types.MODAL_OPEN_TASK);
export const openModalCalendar = createAction(types.MODAL_OPEN_CALENDAR);
export const openModalChart = createAction(types.MODAL_OPEN_CHART);
export const openModalPlant = createAction(types.MODAL_OPEN_PLANT, plant => ({
  plant,
}));
export const closeModalTask = createAction(types.MODAL_CLOSE_TASK);
export const closeModalCalendar = createAction(types.MODAL_CLOSE_CALENDAR);
export const closeModalChart = createAction(types.MODAL_CLOSE_CHART);
export const closeModalPlant = createAction(types.MODAL_CLOSE_PLANT);
