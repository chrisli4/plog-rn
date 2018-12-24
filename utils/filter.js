import moment from 'moment';

const stringToUnix = string =>
  string ? parseInt(moment(string, 'YYYY-MM-DD').format('X'), 10) : null;

const filterByDate = (state, s, e) => {
  const start = stringToUnix(s);
  const end = stringToUnix(e);

  if (!state.byId) return [];
  if (!start && !end) {
    return state.allIds.reduce((acc, id) => {
      acc.push(state.byId[id]);
      return acc;
    }, []);
  }
  return state.allIds.reduce((acc, id) => {
    const current = state.byId[id];
    const currentDate = stringToUnix(current.date);
    if (
      (currentDate >= start && currentDate <= end) ||
      (currentDate >= start && !end) ||
      (currentDate <= end && !start)
    )
      acc.push(current);
    return acc;
  }, []);
};

export default filterByDate;
