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
    worldMatrix: gl.getUniformLocation(shaderProgram, "uWorldMatrix"),
  },
};

const cube = new HollowCube([0.0, 1.0, 0.0, 1.0]);

const render = (now) => {
  now *= 0.001;
  deltaTime = now - then;
  then = now;

  draw(gl, programInfo, cube.vertices, cube.indices);
  cubeRotation += deltaTime;

  requestAnimationFrame(render);
};
requestAnimationFrame(render);
