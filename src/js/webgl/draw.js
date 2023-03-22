let normalized = false; // gaperlu dinormalisasi
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
    normalized,
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
    normalized,
    stride,
    offset
  );

  gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
};

const setNormalAttribute = (gl, programInfo, normals) => {
  const numComponents = 3;
  const type = gl.FLOAT;

  const normalBuffer = initNormalBuffer(gl, normals);
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexNormal,
    numComponents,
    type,
    normalized,
    stride,
    offset
  );

  gl.enableVertexAttribArray(programInfo.attribLocations.vertexNormal);
};

const draw = (gl, programInfo, vertices, indices, normals) => {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // set warna background
  gl.clearDepth(1.0); //clear everything
  gl.enable(gl.DEPTH_TEST); // enable depth testing
  gl.depthFunc(gl.LEQUAL); // barang" yang dekat akan menutupi barang" yang jauh
  gl.canvas.width = innerHeight;
  gl.canvas.height = innerHeight;

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

  if (shaderCheckbox.checked) {
    setNormalAttribute(gl, programInfo, normals);
    gl.uniform3fv(programInfo.uniformLocations.ambientLight, [0.4, 0.4, 0.4]);
  } else {
    gl.disableVertexAttribArray(programInfo.attribLocations.vertexNormal);
    gl.uniform3fv(programInfo.uniformLocations.ambientLight, [1.0, 1.0, 1.0]);
  }

  gl.uniform3fv(programInfo.uniformLocations.directionalVector, [
    projectionSelect.value == "perspective" ? 0.3 : -0.3,
    0.4,
    0.4,
  ]);

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  {
    const vertexCount = indices.length;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
};
