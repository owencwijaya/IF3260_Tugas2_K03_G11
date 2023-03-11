const initPositionBuffer = (gl, positions) => {
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  return positionBuffer;
};

const initColorBuffer = (gl, colors) => {
  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  return colorBuffer;
};

const initIndexBuffer = (gl, indices) => {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW
  );
  return indexBuffer;
};

const initBuffers = (gl, vertices, colors, indices) => {
  const positionBuffer = initPositionBuffer(gl, vertices);
  const colorBuffer = initColorBuffer(gl, colors);
  const indexBuffer = initIndexBuffer(gl, indices);
  return { positionBuffer, colorBuffer, indexBuffer };
};
