const translateMatrix = () => {
  return new Float32Array([
    1,
    0,
    0,
    (obj.config.translation.x + parseInt(xTranslateSlider.value)) / 1000,
    0,
    1,
    0,
    (obj.config.translation.y + parseInt(yTranslateSlider.value)) / 1000,
    0,
    0,
    1,
    (obj.config.translation.z + parseInt(zTranslateSlider.value)) / 1000,
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
