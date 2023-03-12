const rotateXMatrix = (angle) => {
  return new Float32Array([
    1,
    0,
    0,
    0,
    0,
    Math.cos(angle),
    -Math.sin(angle),
    0,
    0,
    Math.sin(angle),
    Math.cos(angle),
    0,
    0,
    0,
    0,
    1,
  ]);
};

const rotateYMatrix = (angle) => {
  return new Float32Array([
    Math.cos(angle),
    0,
    Math.sin(angle),
    0,
    0,
    1,
    0,
    0,
    -Math.sin(angle),
    0,
    Math.cos(angle),
    0,
    0,
    0,
    0,
    1,
  ]);
};

const rotateZMatrix = (angle) => {
  return new Float32Array([
    Math.cos(angle),
    -Math.sin(angle),
    0,
    0,
    Math.sin(angle),
    Math.cos(angle),
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
  ]);
};

const rotate = (modelViewMatrix) => {
  modelViewMatrix = multiply(
    rotateZMatrix(degreesToRadians(zRotateSlider.value)),
    modelViewMatrix
  );
  prevZ = zRotateSlider.value;

  modelViewMatrix = multiply(
    rotateYMatrix(degreesToRadians(yRotateSlider.value)),
    modelViewMatrix
  );

  modelViewMatrix = multiply(
    rotateXMatrix(degreesToRadians(xRotateSlider.value)),
    modelViewMatrix
  );

  return modelViewMatrix;
};
