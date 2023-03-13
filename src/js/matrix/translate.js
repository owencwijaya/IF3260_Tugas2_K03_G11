const translateMatrix = () => {
  return new Float32Array([
    1,
    0,
    0,
    xTranslateSlider.value / 1000,
    0,
    1,
    0,
    yTranslateSlider.value / 1000,
    0,
    0,
    1,
    zTranslateSlider.value / 1000,
    0,
    0,
    0,
    1,
  ]);
};

const translate = (modelViewMatrix) => {
  modelViewMatrix = multiply(transpose(translateMatrix()), modelViewMatrix);
  return modelViewMatrix;
};
