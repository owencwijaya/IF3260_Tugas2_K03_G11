const scaleMatrix = () => {
  return new Float32Array([
    xScalingSlider.value / 1000,
    0,
    0,
    0,

    0,
    yScalingSlider.value / 1000,
    0,
    0,

    0,
    0,
    zScalingSlider.value / 1000,
    0,

    0,
    0,
    0,
    1,
  ]);
};

const scale = (modelViewMatrix) => {
  modelViewMatrix = multiply(
    rotateZMatrix(degreesToRadians(0)),
    modelViewMatrix
  );

  modelViewMatrix = multiply(
    rotateYMatrix(degreesToRadians(0)),
    modelViewMatrix
  );
  modelViewMatrix = multiply(
    rotateXMatrix(degreesToRadians(0)),
    modelViewMatrix
  );

  modelViewMatrix = multiply(transpose(scaleMatrix()), modelViewMatrix);

  // modelViewMatrix = multiply(
  //   rotateZMatrix(degreesToRadians(zRotateSlider.value)),
  //   modelViewMatrix
  // );

  // modelViewMatrix = multiply(
  //   rotateYMatrix(degreesToRadians(yRotateSlider.value)),
  //   modelViewMatrix
  // );

  // modelViewMatrix = multiply(
  //   rotateXMatrix(degreesToRadians(xRotateSlider.value)),
  //   modelViewMatrix
  // );
  return modelViewMatrix;
};
