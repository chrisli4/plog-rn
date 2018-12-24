import moment from 'moment';

export const format = date => moment(date, 'YYYY-MM-DD').format('MMMM D, YYYY');
export const getDay = date => moment(date, 'YYYY-MM-DD').format('D');
export const getMonth = date => moment(date, 'YYYY-MM-DD').format('MMM');
export const getYear = date => moment(date, 'YYYY-MM-DD').format('YYYY');
