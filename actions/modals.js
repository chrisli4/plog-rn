import { createAction } from "redux-actions";
import * as types from "../constants/modals";

export const openModalTask = createAction(types.MODAL_OPEN_TASK);
export const openModalCalendar = createAction(types.MODAL_OPEN_CALENDAR);
export const closeModalTask = createAction(types.MODAL_CLOSE_TASK);
export const closeModalCalendar = createAction(types.MODAL_CLOSE_CALENDAR);
