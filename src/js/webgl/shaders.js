const vertexShaderSource = `
    precision mediump float;

    attribute vec3 aVertexPosition;
    attribute vec4 aVertexColor;
    attribute vec3 aVertexNormal;

    varying vec4 vColor;
    varying highp vec3 vLighting;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    uniform mat4 uNormalMatrix;
    uniform vec3 uAmbientLight;
    uniform vec3 uDirectionalVector;

    void main() {
        vColor = aVertexColor;
        gl_Position = uProjectionMatrix * uModelViewMatrix  * vec4(aVertexPosition, 1.0);

        highp vec3 directionalLightColor = vec3(1, 1, 1);
        highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);
  
        highp float directional = max(dot(transformedNormal.xyz, uDirectionalVector), 0.0);
        vLighting = uAmbientLight + (directionalLightColor * directional);
    }
`;

const fragmentShaderSource = `
    precision mediump float;

    varying vec4 vColor;
    varying highp vec3 vLighting;

    void main() {
      gl_FragColor = vec4(vColor.rgb * vLighting, vColor.a);
    }
`;

// fungsi untuk membuat shader berdasarkan type dan source nya
const loadShader = (gl, type, source) => {
  // bikin shader baru berdasarkan type
  const shader = gl.createShader(type);

  // load source code ke shader
  gl.shaderSource(shader, source);

  // tes compile
  gl.compileShader(shader);

  // kalo COMPILE_STATUS ngga ada, berarti gagal compile
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert("Unable to compile shaders; check console for more information.");
    console.log(
      `Unable to compile ${type} shaders: ${gl.getShaderInfoLog(shader)}`
    );

    return null;
  }

  return shader;
};

// fungsi untuk inisiasi shader; return shaderProgram
const initShaders = (gl) => {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = loadShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );

  // buat shader programnya
  const shaderProgram = gl.createProgram();

  // attach vertex shader & fragment shader
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // misalnya shader programnya gagal compile, return null
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(`Unable to init shader program: check console for more information.`);
    console.log(
      `Unable to initialize shader program: ${gl.getProgramInfoLog(
        shaderProgram
      )}`
    );

    return null;
  }

  return shaderProgram;
};
