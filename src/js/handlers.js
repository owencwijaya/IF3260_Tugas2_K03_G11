const projectionSelect = document.getElementById("projection-select");
projectionSelect.addEventListener("change", () => {
  requestAnimationFrame(render);
});

const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", () => {
  requestAnimationFrame(render);
});

const xTranslateSlider = document.getElementById("x-translate-slider");
xTranslateSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const yTranslateSlider = document.getElementById("y-translate-slider");
yTranslateSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const zTranslateSlider = document.getElementById("z-translate-slider");
zTranslateSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const xRotateSlider = document.getElementById("x-rotate-slider");
xRotateSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const yRotateSlider = document.getElementById("y-rotate-slider");
yRotateSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const zRotateSlider = document.getElementById("z-rotate-slider");
zRotateSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const xScalingSlider = document.getElementById("x-scaling-slider");
xScalingSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const yScalingSlider = document.getElementById("y-scaling-slider");
yScalingSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const zScalingSlider = document.getElementById("z-scaling-slider");
zScalingSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const shaderCheckbox = document.getElementById("shader-checkbox");
shaderCheckbox.addEventListener("change", () => {
  requestAnimationFrame(render);
});

const rotationAnimationCheckbox = document.getElementById(
  "rotation-animation-checkbox"
);
rotationAnimationCheckbox.addEventListener("change", () => {
  requestAnimationFrame(render);
});

const distanceSlider = document.getElementById("distance-slider");
distanceSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const verticalSlider = document.getElementById("vertical-slider");
verticalSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const horizontalSlider = document.getElementById("horizontal-slider");
horizontalSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  xTranslateSlider.value = 0;
  yTranslateSlider.value = 0;
  zTranslateSlider.value = 0;
  xRotateSlider.value = 0;
  yRotateSlider.value = 0;
  zRotateSlider.value = 0;
  xScalingSlider.value = 1000;
  yScalingSlider.value = 1000;
  zScalingSlider.value = 1000;
  distanceSlider.value =
    (parseInt(distanceSlider.max) + parseInt(distanceSlider.min)) / 2;
  verticalSlider.value = 0;
  horizontalSlider.value = 0;
  requestAnimationFrame(render);
});

let drawHollowCube = true;
let drawHollowTrianglePrisma = false;
let drawHollowPyramid = false;

const hollowCubeButton = document.getElementById("hollow-cube-button");
hollowCubeButton.addEventListener("click", () => {
  drawHollowCube = true;
  drawHollowTrianglePrisma = false;
  drawHollowPyramid = false;
  requestAnimationFrame(render);
});

const hollowTrianglePrismaButton = document.getElementById(
  "hollow-triangle-prisma-button"
);
hollowTrianglePrismaButton.addEventListener("click", () => {
  drawHollowCube = false;
  drawHollowTrianglePrisma = true;
  drawHollowPyramid = false;
  requestAnimationFrame(render);
});

const HollowPyramidButton = document.getElementById("hollow-pyramid-button");
HollowPyramidButton.addEventListener("click", () => {
  drawHollowCube = false;
  drawHollowTrianglePrisma = false;
  drawHollowPyramid = true;
  requestAnimationFrame(render);
});
