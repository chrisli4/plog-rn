import { createAction } from 'redux-actions';
import * as types from '../constants/plants';

export const selectPlant = createAction(types.PLANT_SELECT, plant => ({
  plant,
}));

export const addPlant = createAction(types.PLANT_ADD);
export const addPlantSuccess = createAction(types.PLANT_ADD_SUCCESS, plant => ({
  plant,
}));
export const addPlantFailure = createAction(types.PLANT_ADD_FAILURE, error => ({
  error,
}));

export const deletePlant = createAction(types.PLANT_DELETE);
export const deletePlantSuccess = createAction(
  types.PLANT_DELETE_SUCCESS,
  ids => ({
    ids,
  })
);
export const deletePlantFailure = createAction(
  types.PLANT_DELETE_FAILURE,
  error => ({
    error,
  })
);

export const editPlant = createAction(types.PLANT_EDIT, plant => ({
  plant,
}));
export const editPlantSuccess = createAction(
  types.PLANT_EDIT_SUCCESS,
  plant => ({
    plant,
  })
);
export const editPlantFailure = createAction(
  types.PLANT_EDIT_FAILURE,
  error => ({
    error,
  })
);
