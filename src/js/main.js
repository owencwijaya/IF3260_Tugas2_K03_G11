let objects = [];
let transformedObjects = [];

let cubeRotation = 0;
let deltaTime = 0;
let then = 0;

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
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
  },
};

const cube = new HollowCube([0.0, 1.0, 0.0, 1.0]);

const zNear = 0.1;
const zFar = 10;

const orthoMatrix = ortho(-2.0, 2.0, -2.0, 2.0, zNear, zFar);
const obliqueMatrix = oblique(90, 130);
const mOrthMatrix = createMOrth();
const projectionMatrix = multiply(
  mOrthMatrix,
  multiply(orthoMatrix, obliqueMatrix)
);
console.log(orthoMatrix);
console.log(obliqueMatrix);
console.log(projectionMatrix);

const render = (now) => {
  const fov = (45 * Math.PI) / 180;
  const width = gl.canvas.clientWidth;
  const height = gl.canvas.clientHeight;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 10;

  // dapatkan lokasi projection dan modelview (dari shader)
  const projectionMatrixLoc = programInfo.uniformLocations.projectionMatrix;
  const modelViewMatrixLoc = programInfo.uniformLocations.modelViewMatrix;

  // console.log(modelViewMatrix);

  // mat4.ortho(projectionMatrix, -2.0, 2.0, -2.0, 2.0, 0.1, 100);
  const modelViewMatrix = lookAt([0, 0, -5], [0, 0, 0], [0, 1, 0]);
  // set perspective untik projectionMatrix
  // const projectionMatrix = mat4.create();
  // mat4.perspective(projectionMatrix, fov, aspect, zNear, zFar);

  // untuk orthogonal projection
  // const projectionMatrix = multiply(
  //   createMOrth(),
  //   ortho(-2.0, 2.0, -2.0, 2.0, zNear, zFar)
  // );

  // untuk oblique projection
  // const orthoMatrix = ortho(-0.5, 0.5, -0.5, 0.5, zNear, zFar);

  // // rotate
  // mat4.rotate(
  //   modelViewMatrix, // destination matrix
  //   modelViewMatrix, // matrix to rotate
  //   cubeRotation, // amount to rotate in radians
  //   [0, 0, 1]
  // ); // axis to rotate around (Z)
  // mat4.rotate(
  //   modelViewMatrix, // destination matrix
  //   modelViewMatrix, // matrix to rotate
  //   cubeRotation * 0.7, // amount to rotate in radians
  //   [0, 1, 0]
  // ); // axis to rotate around (Y)
  // mat4.rotate(
  //   modelViewMatrix, // destination matrix
  //   modelViewMatrix, // matrix to rotate
  //   cubeRotation * 0.3, // amount to rotate in radians
  //   [1, 0, 0]
  // ); // axis to rotate around (X)

  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(projectionMatrixLoc, gl.FALSE, projectionMatrix);
  gl.uniformMatrix4fv(modelViewMatrixLoc, gl.FALSE, modelViewMatrix);

  now *= 0.001;
  deltaTime = now - then;
  then = now;

  draw(gl, programInfo, cube.vertices, cube.indices);
  cubeRotation += deltaTime;

  requestAnimationFrame(render);
};
requestAnimationFrame(render);
