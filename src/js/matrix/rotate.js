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

const rotateX = (modelViewMatrix, degs) => {
  modelViewMatrix = multiply(
    rotateXMatrix(degreesToRadians(degs)),
    modelViewMatrix
  );

  return modelViewMatrix;
};

const rotateY = (modelViewMatrix, degs) => {
  modelViewMatrix = multiply(
    rotateYMatrix(degreesToRadians(degs)),
    modelViewMatrix
  );

  return modelViewMatrix;
};

const rotateZ = (modelViewMatrix, degs) => {
  modelViewMatrix = multiply(
    rotateZMatrix(degreesToRadians(degs)),
    modelViewMatrix
  );

  return modelViewMatrix;
};

const rotate = (modelViewMatrix) => {
  modelViewMatrix = multiply(
    rotateZMatrix(
      degreesToRadians(obj.config.rotation.z + parseInt(zRotateSlider.value))
    ),
    modelViewMatrix
  );
  modelViewMatrix = multiply(
    rotateYMatrix(
      degreesToRadians(obj.config.rotation.y + parseInt(yRotateSlider.value))
    ),
    modelViewMatrix
  );
  modelViewMatrix = multiply(
    rotateXMatrix(
      degreesToRadians(obj.config.rotation.x + parseInt(xRotateSlider.value))
    ),
    modelViewMatrix
  );

  return modelViewMatrix;
};
