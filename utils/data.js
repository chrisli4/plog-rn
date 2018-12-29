export const getHeight = data => {
  if (data.length > 1) {
    return data.map(item => {
      const y = item.height ? parseInt(item.height, 10) : 0;
      return {
        x: new Date(item.date),
        y,
      };
    });
  }
  return [
    { y: 1, x: new Date('2018-12-1') },
    { y: 2, x: new Date('2018-12-2') },
    { y: 3, x: new Date('2018-12-3') },
  ];
};

export const getTemp = data => {
  if (data.length > 1) {
    return data.map(item => {
      const y = item.temp ? parseInt(item.temp, 10) : 0;
      return {
        x: new Date(item.date),
        y,
      };
    });
  }
  return [
    { y: 2, x: new Date('2018-12-1') },
    { y: 3, x: new Date('2018-12-2') },
    { y: 4, x: new Date('2018-12-3') },
  ];
};

export const getArea = data => {
  if (data.length > 1) {
    return data.map(item => {
      const length = item.length ? parseInt(item.length, 10) : 0;
      const width = item.width ? parseInt(item.width, 10) : 0;
      const y = length * width;
      return {
        x: new Date(item.date),
        y,
      };
    });
  }
  return [
    { y: 4, x: new Date('2018-12-1') },
    { y: 9, x: new Date('2018-12-2') },
    { y: 16, x: new Date('2018-12-3') },
  ];
};
