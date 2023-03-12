const ortho = (left, right, bottom, top, near, far) => {
  return new Float32Array([
    2 / (left - right),
    0,
    0,
    -(left + right) / (left - right),

    0,
    2 / (top - bottom),
    0,
    -(top + bottom) / (top - bottom),

    0,
    0,
    -2 / (far - near),
    (far + near) / (near - far),

    0,
    0,
    0,
    1,
  ]);
};

const oblique = (theta, phi) => {
  const t = degreesToRadians(theta);
  const p = degreesToRadians(phi);

  const cotTheta = 1 / Math.tan(t);
  const cotPhi = 1 / Math.tan(p);

  return new Float32Array([
    1,
    0,
    -cotTheta,
    0,

    0,
    1,
    -cotPhi,
    0,

    0,
    0,
    1,
    0,

    0,
    0,
    0,
    1,
  ]);
};
