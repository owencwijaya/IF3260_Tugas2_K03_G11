let objects = [];
let transformedObjects = [];

let cubeRotation = 0;
let deltaTime = 0;
let then = 0;

let prevDrawn = {
  HollowCube: true,
  HollowTrianglePrisma: false,
  HollowPyramid: false,
};

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
  },
};

let obj = new HollowCube([0.0, 1.0, 0.0, 1.0]);
// const obj = new HollowPyramid();
// const obj = new HollowTrianglePrism([0.0, 0.0, 1.0, 1.0]);

const render = (now) => {
  const fov = (45 * Math.PI) / 180;
  const zNear = 0.1;
  const zFar = 10;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;

  let obj = new HollowCube([0.0, 1.0, 0.0, 1.0]);

  if (drawHollowCube && drawHollowCube != prevDrawn.HollowCube) {
    obj = new HollowCube([0.0, 1.0, 0.0, 1.0]);
    prevDrawn.HollowCube != prevDrawn.HollowCube;
  }

  if (
    drawHollowTrianglePrisma &&
    drawHollowTrianglePrisma != prevDrawn.HollowTrianglePrisma
  ) {
    obj = new HollowTrianglePrism([0.0, 1.0, 0.0, 1.0]);
    prevDrawn.HollowTrianglePrisma != prevDrawn.HollowTrianglePrisma;
  }

  if (drawHollowPyramid && drawHollowPyramid != prevDrawn.HollowPyramid) {
    obj = new HollowPyramid();
    prevDrawn.HollowPyramid != prevDrawn.HollowPyramid;
  }

  // dapatkan lokasi projection dan modelview (dari shader)
  const projectionMatrixLoc = programInfo.uniformLocations.projectionMatrix;
  const modelViewMatrixLoc = programInfo.uniformLocations.modelViewMatrix;
  const normalMatrixLoc = programInfo.uniformLocations.normalMatrix;
  // console.log(modelViewMatrix);
  const eye = [
    -horizontalSlider.value / 1000,
    -verticalSlider.value / 1000,
    (parseInt(distanceSlider.min) +
      parseInt(distanceSlider.max) -
      distanceSlider.value) /
      1000,
  ];

  let modelViewMatrix = lookAt(eye, [0, 0, 1], [0, 1, 0]);
  let projectionMatrix = null;

  if (projectionSelect.value == "perspective") {
    projectionMatrix = transpose(perspective(fov, aspect, 0.1, 100.0));
  } else if (projectionSelect.value == "oblique") {
    const orthoMatrix = ortho(-2.0, 2.0, -2.0, 2.0, zNear, zFar);
    const obliqueMatrix = oblique(63.4, 63.4);
    projectionMatrix = transpose(multiply(obliqueMatrix, orthoMatrix));
  } else {
    projectionMatrix = transpose(ortho(-2.0, 2.0, -2.0, 2.0, zNear, zFar));
  }

  // let normalMatrix = transpose(invert(modelViewMatrix));
  let normalMatrix = mat4.create();

  normalMatrix = invert(modelViewMatrix);
  normalMatrix = transpose(normalMatrix);

  modelViewMatrix = translate(modelViewMatrix);

  if (rotationAnimationCheckbox.checked) {
    modelViewMatrix = rotateZ(modelViewMatrix, (cubeRotation * 180) / Math.PI);
    modelViewMatrix = rotateY(modelViewMatrix, (cubeRotation * 180) / Math.PI);
    modelViewMatrix = rotateX(modelViewMatrix, (cubeRotation * 180) / Math.PI);
  } else {
    modelViewMatrix = rotate(modelViewMatrix);
  }

  modelViewMatrix = scale(modelViewMatrix);

  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(projectionMatrixLoc, gl.FALSE, projectionMatrix);
  gl.uniformMatrix4fv(modelViewMatrixLoc, gl.FALSE, modelViewMatrix);
  gl.uniformMatrix4fv(normalMatrixLoc, gl.FALSE, normalMatrix);

  if (rotationAnimationCheckbox.checked) {
    now *= 0.001;
    deltaTime = now - then;
    then = now;

    draw(gl, programInfo, obj.vertices, obj.indices, obj.normals);
    cubeRotation += deltaTime;

    requestAnimationFrame(render);
  } else {
    draw(gl, programInfo, obj.vertices, obj.indices, obj.normals);
  }
};
requestAnimationFrame(render);
