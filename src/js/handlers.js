const projectionSelect = document.getElementById("projection-select");
projectionSelect.addEventListener("change", () => {
  fovSlider.disabled = projectionSelect.value == "orthographic";
  distanceSlider.disabled = projectionSelect.value != "perspective";

  requestAnimationFrame(render);
});

const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", () => {
  requestAnimationFrame(render);
});

const helpModal = document.getElementById("help-modal");

const helpButton = document.getElementById("help-button");
helpButton.addEventListener("click", () => {
  helpModal.style.display = "block";
});

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", () => {
  helpModal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == helpModal) {
    helpModal.style.display = "none";
  }
};

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
  xRotateSlider.disabled = rotationAnimationCheckbox.checked;
  yRotateSlider.disabled = rotationAnimationCheckbox.checked;
  zRotateSlider.disabled = rotationAnimationCheckbox.checked;
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
const reset = () => {
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
  horizontalSlider.value = 0;
  verticalSlider.value = 90;

  document.getElementById("xtranslation").value = 0;
  document.getElementById("ytranslation").value = 0;
  document.getElementById("ztranslation").value = 0;

  document.getElementById("xrotation").value = 0;
  document.getElementById("yrotation").value = 0;
  document.getElementById("zrotation").value = 0;

  document.getElementById("xscale").value = 1.0;
  document.getElementById("yscale").value = 1.0;
  document.getElementById("zscale").value = 1.0;
  requestAnimationFrame(render);
};

const fovSlider = document.getElementById("fov-slider");
fovSlider.addEventListener("input", () => {
  requestAnimationFrame(render);
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", reset);

let drawHollowCube = false;
let drawHollowTrianglePrisma = false;
let drawHollowDiamond = true;

const hollowCubeButton = document.getElementById("hollow-cube-button");
hollowCubeButton.addEventListener("click", () => {
  drawHollowCube = true;
  drawHollowTrianglePrisma = false;
  drawHollowDiamond = false;
  loaded = false;
  requestAnimationFrame(render);
});

const hollowTrianglePrismaButton = document.getElementById(
  "hollow-triangle-prisma-button"
);
hollowTrianglePrismaButton.addEventListener("click", () => {
  drawHollowCube = false;
  drawHollowTrianglePrisma = true;
  drawHollowDiamond = false;
  loaded = false;
  requestAnimationFrame(render);
});

const HollowDiamondButton = document.getElementById("hollow-diamond-button");
HollowDiamondButton.addEventListener("click", () => {
  drawHollowCube = false;
  drawHollowTrianglePrisma = false;
  drawHollowDiamond = true;
  loaded = false;
  requestAnimationFrame(render);
});

const saveModelButton = document.getElementById("save-model-button");
saveModelButton.addEventListener("click", () => {
  // update config
  const newConfig = {
    translation: {
      x: obj.config.translation.x + parseInt(xTranslateSlider.value),
      y: obj.config.translation.y + parseInt(yTranslateSlider.value),
      z: obj.config.translation.z + parseInt(zTranslateSlider.value),
    },
    rotation: {
      x: obj.config.rotation.x + parseInt(xRotateSlider.value),
      y: obj.config.rotation.y + parseInt(yRotateSlider.value),
      z: obj.config.rotation.z + parseInt(zRotateSlider.value),
    },
    scaling: {
      x:
        obj.config.scaling.x == 1000
          ? parseInt(xScalingSlider.value)
          : obj.config.scaling.x,
      y:
        obj.config.scaling.y == 1000
          ? parseInt(yScalingSlider.value)
          : obj.config.scaling.y,
      z:
        obj.config.scaling.z == 1000
          ? parseInt(zScalingSlider.value)
          : obj.config.scaling.z,
    },
  };
  if (obj instanceof HollowCube) {
    savedObj = new HollowCube(obj.color, newConfig);
  } else if (obj instanceof HollowTrianglePrism) {
    savedObj = new HollowTrianglePrism(obj.color, newConfig);
  } else if (obj instanceof HollowDiamond) {
    savedObj = new HollowDiamond(newConfig);
  }

  console.log(savedObj);
  const filename = document.getElementById("filename").value;
  if (filename == "") {
    alert("Please input the output file name!");
    return;
  }

  const content = JSON.stringify(savedObj);

  const file = new Blob([content], {
    type: "json/javascript",
  });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(file);
  link.download = `${filename}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
});

const loadModelButton = document.getElementById("load-model-button");
loadModelButton.addEventListener("change", () => {
  const selectedFile = loadModelButton.files[0];

  const reader = new FileReader();

  reader.readAsText(selectedFile, "UTF-8");

  reader.onload = (evt) => {
    let content = JSON.parse(evt.target.result);

    console.log(content);

    prevDrawn.HollowCube = false;
    prevDrawn.HollowDiamond = false;
    prevDrawn.HollowTrianglePrisma = false;
    drawHollowCube = false;
    drawHollowDiamond = false;
    drawHollowTrianglePrisma = false;

    if (content.type == "HollowCube") {
      prevDrawn.HollowCube = false;
      drawHollowCube = true;
      loaded = true;
      obj = new HollowCube(content.color, content.config);
    } else if (content.type == "HollowTrianglePrism") {
      prevDrawn.HollowTrianglePrisma = false;
      drawHollowTrianglePrisma = true;
      loaded = true;
      obj = new HollowTrianglePrism(content.color, content.config);
    } else if (content.type == "HollowDiamond") {
      prevDrawn.HollowDiamond = false;
      drawHollowDiamond = true;
      loaded = true;
      obj = new HollowDiamond(content.config);
    }
    console.log(obj);
    reset();
  };

  alert("Successfully loaded file!");
  reset();
  loadModelButton.value = "";
});
