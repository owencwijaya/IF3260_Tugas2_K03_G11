let normalize = false; // gaperlu dinormalisasi
let stride = 0; // berapa banyak byte dari 1 set of values, kalo 0 berarti ngikutin numComponents dan Type
let offset = 0; // offset untuk buffer

const setPositionAttribute = (gl, programInfo, vertices) => {
  const numComponents = 3; // keluarin 3 value per iterasi
  const type = gl.FLOAT;

  const positionBuffer = initPositionBuffer(gl, vertices);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexPosition,
    numComponents,
    type,
    normalize,
    stride,
    offset
  );

  gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
};

const setColorAttribute = (gl, programInfo, colors) => {
  const numComponents = 4;
  const type = gl.FLOAT;

  const colorBuffer = initColorBuffer(gl, colors);
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);

  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexColor,
    numComponents,
    type,
    normalize,
    stride,
    offset
  );

  gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
};

const draw = (gl, programInfo, vertices, indices) => {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // set warna background
  gl.clearDepth(1.0); //clear everything
  gl.enable(gl.DEPTH_TEST); // enable depth testing
  gl.depthFunc(gl.LEQUAL); // barang" yang dekat akan menutupi barang" yang jauh

  const fov = (45 * Math.PI) / 180;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100;

  let positions = [];
  let colors = [];

  if (Array.isArray(vertices)) {
    for (let i = 0; i < vertices.length; i++) {
      vertices[i].position.forEach((pos) => {
        positions.push(pos);
      });

      vertices[i].color.forEach((col) => {
        colors.push(col[0], col[1], col[2], col[3]);
      });
    }
  } else {
    positions = vertices.position;
    colors = vertices.color;
  }

  // set indices buffer dan position / color attribute
  const indexBuffer = initIndexBuffer(gl, indices);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  setPositionAttribute(gl, programInfo, positions);
  setColorAttribute(gl, programInfo, colors);

  // dapatkan lokasi projection dan modelview (dari shader)
  const projectionMatrixLoc = programInfo.uniformLocations.projectionMatrix;
  const modelViewMatrixLoc = programInfo.uniformLocations.modelViewMatrix;

  const projectionMatrix = mat4.create();
  const modelViewMatrix = mat4.create();

  // set lookAt di modelViewMatrix
  mat4.lookAt(modelViewMatrix, [0, 5, -1], [0, 0, 0], [0, 1, 0]);

  // set perspective untik projectionMatrix
  mat4.perspective(projectionMatrix, fov, aspect, zNear, zFar);

  // rotate
  mat4.rotate(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to rotate
    cubeRotation, // amount to rotate in radians
    [0, 0, 1]
  ); // axis to rotate around (Z)
  mat4.rotate(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to rotate
    cubeRotation * 0.7, // amount to rotate in radians
    [0, 1, 0]
  ); // axis to rotate around (Y)
  mat4.rotate(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to rotate
    cubeRotation * 0.3, // amount to rotate in radians
    [1, 0, 0]
  ); // axis to rotate around (X)

  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(projectionMatrixLoc, gl.FALSE, projectionMatrix);
  gl.uniformMatrix4fv(modelViewMatrixLoc, gl.FALSE, modelViewMatrix);

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  {
    const vertexCount = indices.length;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
};
