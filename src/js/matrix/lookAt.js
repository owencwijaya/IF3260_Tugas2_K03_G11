const lookAt = (eye, at, up) => {
  const zAxis = normalize(subtractVectors(eye, at));
  console.log(zAxis);
  const xAxis = normalize(cross(up, zAxis));
  console.log(cross(up, zAxis));
  console.log(xAxis);
  const yAxis = cross(zAxis, xAxis);
  console.log(yAxis);

  const matrix = new Float32Array([
    xAxis[0],
    xAxis[1],
    xAxis[2],
    0,
    yAxis[0],
    yAxis[1],
    yAxis[2],
    0,
    zAxis[0],
    zAxis[1],
    zAxis[2],
    0,
    -dot(xAxis, eye),
    -dot(yAxis, eye),
    -dot(zAxis, eye),
    1,
  ]);

  return matrix;
};
