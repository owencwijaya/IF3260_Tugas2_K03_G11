const scaleMatrix = () => {
  const xScale =
    obj.config.scaling.x == 1000
      ? parseInt(xScalingSlider.value)
      : obj.config.scaling.x;

  const yScale =
    obj.config.scaling.y == 1000
      ? parseInt(yScalingSlider.value)
      : obj.config.scaling.y;

  const zScale =
    obj.config.scaling.z == 1000
      ? parseInt(zScalingSlider.value)
      : obj.config.scaling.z;

  return new Float32Array([
    xScale / 1000,
    0,
    0,
    0,

    0,
    yScale / 1000,
    0,
    0,

    0,
    0,
    zScale / 1000,
    0,

    0,
    0,
    0,
    1,
  ]);
};

const scale = (modelViewMatrix) => {
  modelViewMatrix = multiply(transpose(scaleMatrix()), modelViewMatrix);

  return modelViewMatrix;
};
