class HollowCube {
  constructor(color = [0.0, 1, 0.0, 1], config = undefined) {
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
          -0.8, 0.8, -0.8, -0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // bottom
        position: [
          -0.8, -0.8, -0.8, -0.8, -0.8, 0.8, 0.8, -0.8, 0.8, 0.8, -0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        // left
        position: [
          -0.8, 0.8, 0.8, -0.8, -0.8, 0.8, -0.8, -0.8, -0.8, -0.8, 0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // right
        position: [
          0.8, 0.8, 0.8, 0.8, -0.8, 0.8, 0.8, -0.8, -0.8, 0.8, 0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // front
        position: [
          0.8, 0.8, 0.8, 0.8, -0.8, 0.8, -0.8, -0.8, 0.8, -0.8, 0.8, 0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        // back
        position: [
          0.8, 0.8, -0.8, 0.8, -0.8, -0.8, -0.8, -0.8, -0.8, -0.8, 0.8, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        // inner top
        position: [
          -0.64, 0.64, -0.64, -0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64,
          -0.64,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // inner bottom
        position: [
          -0.64, -0.64, -0.64, -0.64, -0.64, 0.64, 0.64, -0.64, 0.64, 0.64,
          -0.64, -0.64,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // inner left
        position: [
          -0.64, 0.64, 0.64, -0.64, -0.64, 0.64, -0.64, -0.64, -0.64, -0.64,
          0.64, -0.64,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // inner right
        position: [
          0.64, 0.64, 0.64, 0.64, -0.64, 0.64, 0.64, -0.64, -0.64, 0.64, 0.64,
          -0.64,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // inner front
        position: [
          0.64, 0.64, 0.64, 0.64, -0.64, 0.64, -0.64, -0.64, 0.64, -0.64, 0.64,
          0.64,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // inner back
        position: [
          0.64, 0.64, -0.64, 0.64, -0.64, -0.64, -0.64, -0.64, -0.64, -0.64,
          0.64, -0.64,
        ],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        // hollow top
        position: [
          -0.64, 0.8, -0.64, -0.64, 0.8, 0.64, 0.64, 0.8, 0.64, 0.64, 0.8,
          -0.64,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // hollow bottom
        position: [
          -0.64, -0.8, -0.64, -0.64, -0.8, 0.64, 0.64, -0.8, 0.64, 0.64, -0.8,
          -0.64,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // hollow left
        position: [
          -0.8, 0.64, 0.64, -0.8, -0.64, 0.64, -0.8, -0.64, -0.64, -0.8, 0.64,
          -0.64,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // hollow right
        position: [
          0.8, 0.64, 0.64, 0.8, -0.64, 0.64, 0.8, -0.64, -0.64, 0.8, 0.64,
          -0.64,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // hollow front
        position: [
          0.64, 0.64, 0.8, 0.64, -0.64, 0.8, -0.64, -0.64, 0.8, -0.64, 0.64,
          0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        // hollow back
        position: [
          0.64, 0.64, -0.8, 0.64, -0.64, -0.8, -0.64, -0.64, -0.8, -0.64, 0.64,
          -0.8,
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
      0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0,
      // bottom
      0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0,
      // left
      -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0,
      // right
      0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0,
      // front
      0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8,
      // back
      0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8,

      // inner top
      0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0,
      // inner bottom
      0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0,
      // inner left
      -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0,
      // inner right
      0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0,
      // inner front
      0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8,
      // inner back
      0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8,

      // hollow top
      0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0,
      // hollow bottom
      0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0,
      // hollow left
      -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0,
      // hollow right
      0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0,
      // hollow front
      0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8,
      // hollow back
      0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8, 0.0, 0.0, -0.8,
    ];
  }

  updateColor(convertedColor) {
    this.color = convertedColor;
    this.vertices.forEach((vertex) => {
      const colorLength = vertex.color.length;
      vertex.color = Array(colorLength).fill(convertedColor);
    });
  }
}
