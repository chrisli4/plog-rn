import { createAction } from "redux-actions";
import * as types from "../constants/screen";

export const setCurrentScreen = createAction(types.SCREEN_SET_CURRENT, screen => ({
  screen,
}));

export const clearCurrentScreen = createAction(types.SCREEN_CLEAR_CURRENT);
