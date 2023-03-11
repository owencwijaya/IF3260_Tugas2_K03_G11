const normalize = (array) => {
  let sum = 0;

  array.forEach((elmt) => {
    sum += elmt * elmt;
  });

  const magnitude = Math.sqrt(sum);

  for (let i = 0; i < array.length; i++) {
    array[i] /= magnitude;
  }

  return array;
};

const subtractVectors = (a, b) => {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    result[i] = a[i] - b[i];
  }

  return result;
};

const cross = (a, b) => {
  let result = [];

  result[0] = a[1] * b[2] - a[2] * b[1];
  result[1] = a[2] * b[0] - a[0] * b[2];
  result[2] = a[0] * b[1] - a[1] * b[0];

  return result;
};

const dot = (a, b) => {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
};
