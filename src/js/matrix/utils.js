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

const multiply = (a, b) => {
  const result = new Float32Array(16).fill(0);

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        result[i * 4 + j] += a[i * 4 + k] * b[k * 4 + j];
      }
    }
  }

  return result;
};

const transpose = (arr) => {
  const transposedArr = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      transposedArr[i * 4 + j] = arr[j * 4 + i];
    }
  }
  return transposedArr;
};

const createMOrth = () => {
  return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
};

const createIdentity = () => {
  return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
};

const degreesToRadians = (degree) => {
  return (degree * Math.PI) / 180;
};
