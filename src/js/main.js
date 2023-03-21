let objects = [];
let transformedObjects = [];

let cubeRotation = 0;
let deltaTime = 0;
let then = 0;

let prevDrawn = {
  HollowCube: false,
  HollowTrianglePrisma: false,
  HollowDiamond: false,
  color: colorPicker.value,
};

let loaded = false;

const gl_canvas = document.getElementById("gl-canvas");

const gl =
  gl_canvas.getContext("webgl") || gl_canvas.getContext("experimental-webgl");

gl.canvas.width = innerHeight;
gl.canvas.height = innerHeight;

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
gl.enable(gl.DEPTH_TEST);

const shaderProgram = initShaders(gl);

const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
    vertexNormal: gl.getAttribLocation(shaderProgram, "aVertexNormal"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    normalMatrix: gl.getUniformLocation(shaderProgram, "uNormalMatrix"),
    ambientLight: gl.getUniformLocation(shaderProgram, "uAmbientLight"),
  },
};

let modelViewMatrix = null;
let projectionMatrix = null;
let lookAtMatrix = null;
let obj = new HollowDiamond();

const render = (now) => {
  const fov = (45 * Math.PI) / 180;
  const zNear = 0.1;
  const zFar = 10;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;

  if (drawHollowCube && drawHollowCube != prevDrawn.HollowCube && !loaded) {
    obj = new HollowCube([0.0, 1.0, 0.0, 1.0]);
    prevDrawn.HollowCube != prevDrawn.HollowCube;
    loaded = false;
  }

  if (
    drawHollowTrianglePrisma &&
    drawHollowTrianglePrisma != prevDrawn.HollowTrianglePrisma &&
    !loaded
  ) {
    obj = new HollowTrianglePrism([0.0, 1.0, 0.0, 1.0]);
    prevDrawn.HollowTrianglePrisma != prevDrawn.HollowTrianglePrisma;
    loaded = false;
  }

  if (
    drawHollowDiamond &&
    drawHollowDiamond != prevDrawn.HollowDiamond &&
    !loaded
  ) {
    obj = new HollowDiamond();
    prevDrawn.HollowDiamond != prevDrawn.HollowDiamond;
    loaded = false;
  }

  const hex = colorPicker.value;

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const color = result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;

  const convertedColor = [color.r / 255, color.g / 255, color.b / 255, 1.0];

  if (convertedColor != prevDrawn.color) {
    obj.updateColor(convertedColor);
    prevDrawn.color = convertedColor;
  }

  // dapatkan lokasi projection dan modelview (dari shader)
  const projectionMatrixLoc = programInfo.uniformLocations.projectionMatrix;
  const modelViewMatrixLoc = programInfo.uniformLocations.modelViewMatrix;
  const normalMatrixLoc = programInfo.uniformLocations.normalMatrix;

  const eye = [
    -horizontalSlider.value / 1000,
    -verticalSlider.value / 1000,
    (parseInt(distanceSlider.min) +
      parseInt(distanceSlider.max) -
      distanceSlider.value) /
      1000,
  ];

  lookAtMatrix = lookAt(eye, [0, 0, 1], [0, 1, 0]);
  modelViewMatrix = lookAtMatrix;

  if (projectionSelect.value == "perspective") {
    projectionMatrix = transpose(perspective(fov, aspect, 0.1, 100.0));
  } else if (projectionSelect.value == "oblique") {
    const orthoMatrix = ortho(-2.0, 2.0, -2.0, 2.0, zNear, zFar);
    const obliqueMatrix = oblique(-63.4, -63.4);
    projectionMatrix = transpose(multiply(obliqueMatrix, orthoMatrix));
  } else {
    projectionMatrix = transpose(ortho(-2.0, 2.0, -2.0, 2.0, zNear, zFar));
  }

  modelViewMatrix = translate(modelViewMatrix);

  if (rotationAnimationCheckbox.checked) {
    modelViewMatrix = rotateZ(modelViewMatrix, (cubeRotation * 180) / Math.PI);
    modelViewMatrix = rotateY(
      modelViewMatrix,
      (cubeRotation * 180 * 0.6) / Math.PI
    );
    modelViewMatrix = rotateX(
      modelViewMatrix,
      (cubeRotation * 180 * 0.2) / Math.PI
    );
  } else {
    modelViewMatrix = rotate(modelViewMatrix);
  }

  modelViewMatrix = scale(modelViewMatrix);

  let normalMatrix = invert(modelViewMatrix);
  normalMatrix = transpose(normalMatrix);

  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(projectionMatrixLoc, gl.FALSE, projectionMatrix);
  gl.uniformMatrix4fv(modelViewMatrixLoc, gl.FALSE, modelViewMatrix);
  gl.uniformMatrix4fv(normalMatrixLoc, gl.FALSE, normalMatrix);

  if (rotationAnimationCheckbox.checked) {
    now *= 0.001;
    deltaTime = now - then;
    then = now;

    const frequency = 0.2;
    const amplitude = 127;

    const red = Math.sin(frequency * now) * amplitude + amplitude;
    const green =
      Math.sin(frequency * now + (2 * Math.PI) / 3) * amplitude + amplitude;
    const blue =
      Math.sin(frequency * now + (4 * Math.PI) / 3) * amplitude + amplitude;

    const color = [red / 255, green / 255, blue / 255, 1.0];

    console.log(color);
    obj.updateColor(color);

    draw(gl, programInfo, obj.vertices, obj.indices, obj.normals);
    cubeRotation += deltaTime;

    requestAnimationFrame(render);
  } else {
    draw(gl, programInfo, obj.vertices, obj.indices, obj.normals);
  }
};

requestAnimationFrame(render);
