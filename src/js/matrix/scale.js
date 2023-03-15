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
  modelViewMatrix = multiply(transpose(scaleMatrix()), modelViewMatrix);
  return modelViewMatrix;
};
