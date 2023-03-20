class HollowCube {
  constructor(color = [0.0, 1.0, 0.0, 1.0], config = undefined) {
    this.color = color;
    this.type = "HollowCube";
    this.config =
      config != undefined
        ? config
        : {
            translation: {
              x: 0,
              y: 0,
              z: 0,
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0,
            },
            scaling: {
              x: 1000,
              y: 1000,
              z: 1000,
            },
          };
    this.vertices = [
      {
        // top
        position: [
          -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // bottom
        position: [
          -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0,
        ],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        // left
        position: [
          -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // right
        position: [
          1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // front
        position: [
          1.0, 1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0,
        ],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        // back
        position: [
          1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0,
        ],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        // inner top
        position: [
          -0.8, 0.8, -0.8, -0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // inner bottom
        position: [
          -0.8, -0.8, -0.8, -0.8, -0.8, 0.8, 0.8, -0.8, 0.8, 0.8, -0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // inner left
        position: [
          -0.8, 0.8, 0.8, -0.8, -0.8, 0.8, -0.8, -0.8, -0.8, -0.8, 0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // inner right
        position: [
          0.8, 0.8, 0.8, 0.8, -0.8, 0.8, 0.8, -0.8, -0.8, 0.8, 0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // inner front
        position: [
          0.8, 0.8, 0.8, 0.8, -0.8, 0.8, -0.8, -0.8, 0.8, -0.8, 0.8, 0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // inner back
        position: [
          0.8, 0.8, -0.8, 0.8, -0.8, -0.8, -0.8, -0.8, -0.8, -0.8, 0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        // hollow top
        position: [
          -0.8, 1.0, -0.8, -0.8, 1.0, 0.8, 0.8, 1.0, 0.8, 0.8, 1.0, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // hollow bottom
        position: [
          -0.8, -1.0, -0.8, -0.8, -1.0, 0.8, 0.8, -1.0, 0.8, 0.8, -1.0, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // hollow left
        position: [
          -1.0, 0.8, 0.8, -1.0, -0.8, 0.8, -1.0, -0.8, -0.8, -1.0, 0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // hollow right
        position: [
          1.0, 0.8, 0.8, 1.0, -0.8, 0.8, 1.0, -0.8, -0.8, 1.0, 0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // hollow front
        position: [
          0.8, 0.8, 1.0, 0.8, -0.8, 1.0, -0.8, -0.8, 1.0, -0.8, 0.8, 1.0,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // hollow back
        position: [
          0.8, 0.8, -1.0, 0.8, -0.8, -1.0, -0.8, -0.8, -1.0, -0.8, 0.8, -1.0,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
    ];
    this.indices = this.createIndices();

    this.normals = this.createNormals();
  }

  createIndices() {
    const indices = [];
    const innerOffset = (this.vertices.length * 4) / 3;
    const hollowOffset = (this.vertices.length * 4 * 2) / 3;

    for (let i = 0; i < 6; i++) {
      const startIdx = 4 * i;
      for (let j = 0; j < 4; j++) {
        const nextIdx = (j + 1) % 4;

        const leftTopIdx = startIdx + j;
        const rightTopIdx = startIdx + nextIdx;
        const leftInnerIdx = startIdx + innerOffset + j;
        const rightInnerIdx = startIdx + innerOffset + nextIdx;
        const leftHollowIdx = startIdx + hollowOffset + j;
        const rightHollowIdx = startIdx + hollowOffset + nextIdx;

        indices.push(leftTopIdx, rightTopIdx, leftHollowIdx);
        indices.push(rightTopIdx, leftHollowIdx, rightHollowIdx);
        indices.push(leftInnerIdx, rightInnerIdx, leftHollowIdx);
        indices.push(rightInnerIdx, leftHollowIdx, rightHollowIdx);
      }
    }

    return indices;
  }

  createNormals() {
    return [
      // top
      0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
      // bottom
      0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
      // left
      -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
      // right
      1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
      // front
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
      // back
      0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

      // inner top
      0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
      // inner bottom
      0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
      // inner left
      -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
      // inner right
      1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
      // inner front
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
      // inner back
      0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

      // hollow top
      0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
      // hollow bottom
      0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
      // hollow left
      -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
      // hollow right
      1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
      // hollow front
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
      // hollow back
      0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
    ];
  }

  updateColor(convertedColor) {
    this.color = convertedColor;
    this.vertices.forEach((vertex) => {
      const colorLength = vertex.color.length;
      vertex.color = Array(colorLength).fill(convertedColor);
    });
  }

  transformVertices() {
    console.log(projectionMatrix);
    console.log(modelViewMatrix);
    let tempVertices = [];

    this.vertices.forEach((vertex) => {
      for (
        let i = 0;
        i < vertex.position.length;
        i += vertex.position.length / 4
      ) {
        tempVertices.push(
          new Float32Array([
            vertex.position[i],
            vertex.position[i + 1],
            vertex.position[i + 2],
            1,
          ])
        );
      }
    });

    let transformedVertices = new Array();

    tempVertices.forEach((vertex) => {
      const transformedVertex = multiplyMatVec(
        multiply(modelViewMatrix, invert(lookAtMatrix)),
        vertex
      );
      transformedVertices.push([
        transformedVertex[0],
        transformedVertex[1],
        transformedVertex[2],
        transformedVertex[3],
      ]);
    });

    let newVertices = new Array();

    for (let i = 0; i < transformedVertices.length; i += 4) {
      newVertices.push({
        position: [
          transformedVertices[i].slice(0, 3),
          transformedVertices[i + 1].slice(0, 3),
          transformedVertices[i + 2].slice(0, 3),
          transformedVertices[i + 3].slice(0, 3),
        ].flat(),
        color: [this.color, this.color, this.color, this.color],
      });
    }

    return newVertices;
  }
}
