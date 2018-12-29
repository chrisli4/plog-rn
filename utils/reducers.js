export const addId = (state, id) => [id, ...state.slice(0)];

const deleteIds = (state, ids) => state.filter(i => ids.indexOf(i) === -1);
export const deleteId = (state, id) => deleteIds(state, [id]);

export const deleteProps = (state, ids) =>
  Object.keys(state).reduce((acc, i) => {
    if (ids.indexOf(i) === -1) {
      acc[i] = state[i];
    }
    return acc;
  }, {});

export const addItem = (state, item) => ({
  ...state,
  allIds: addId(state.allIds, item.id),
  byId: {
    ...state.byId,
    [item.id]: item,
  },
  error: {},
});

export const deleteItems = (state, ids) => ({
  ...state,
  allIds: deleteIds(state.allIds, ids),
  byId: deleteProps(state.byId, ids),
  error: {},
});

export const deleteItem = (state, id) => deleteItems(state, [id]);

export const editItem = (state, item) => ({
  ...state,
  byId: {
    ...state.byId,
    [item.id]: {
      ...state.byId[item.id],
      ...item,
    },
  },
  error: {},
});
