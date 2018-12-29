import { format } from './date';

export const formatImages = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow += 1;
  }

  return data;
};

export const makePhotoView = photos =>
  photos.map(photo => ({
    source: {
      uri: photo.uri,
    },
    date: format(photo.date),
    comment: photo.comment,
    width: 400,
    height: 650,
  }));
