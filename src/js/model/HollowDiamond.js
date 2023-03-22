class HollowDiamond {
  constructor(color = [0.0, 1.0, 0.0, 0.0], config = undefined) {
    this.type = "HollowDiamond";
    this.color = color;
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
        position: [-1, 0.2, 1, -1, 0, 1, 1, 0, 1, 1, 0.2, 1],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [-0.8, 0.2, 0.8, -0.8, 0, 0.8, 0.8, 0, 0.8, 0.8, 0.2, 0.8],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [-1, 0.2, -1, -1, 0, -1, 1, 0, -1, 1, 0.2, -1],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [
          -0.8, 0.2, -0.8, -0.8, 0, -0.8, 0.8, 0, -0.8, 0.8, 0.2, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [-1, 0, 1, -1, 0.2, 1, -1, 0.2, -1, -1, 0, -1],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [
          -0.8, 0, 0.8, -0.8, 0.2, 0.8, -0.8, 0.2, -0.8, -0.8, 0, -0.8,
        ],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [1, 0, 1, 1, 0.2, 1, 1, 0.2, -1, 1, 0, -1],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        position: [0.8, 0, 0.8, 0.8, 0.2, 0.8, 0.8, 0.2, -0.8, 0.8, 0, -0.8],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [0, 2, 0, -1, 0.2, 1, 0, 1.8, 0.1, -0.8, 0.2, 1],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [-0.1, 1.8, 0, -1, 0.2, 0.8, 0, 1.8, 0, -0.8, 0.2, 0.8],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        position: [0, 2, 0, 1, 0.2, 1, 0, 1.8, 0.1, 0.8, 0.2, 1],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        position: [0.1, 1.8, 0, 1, 0.2, 0.8, 0, 1.8, 0, 0.8, 0.2, 0.8],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [0, 2, 0, -1, 0.2, -1, 0, 1.8, -0.1, -0.8, 0.2, -1],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [-0.1, 1.8, 0, -1, 0.2, -0.8, 0, 1.8, 0, -0.8, 0.2, -0.8],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        position: [0, 2, 0, 1, 0.2, -1, 0, 1.8, -0.1, 0.8, 0.2, -1],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [0.1, 1.8, 0, 1, 0.2, -0.8, 0, 1.8, 0, 0.8, 0.2, -0.8],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [0, -1.8, 0, -1, 0, 1, 0, -1.6, 0.1, -0.8, 0, 1],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        position: [-0.1, -1.6, 0, -1, 0, 0.8, 0, -1.6, 0, -0.8, 0, 0.8],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [0, -1.8, 0, 1, 0, 1, 0, -1.6, 0.1, 0.8, 0, 1],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        position: [0.1, -1.6, 0, 1, 0, 0.8, 0, -1.6, 0, 0.8, 0, 0.8],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [0, -1.8, 0, -1, 0, -1, 0, -1.6, -0.1, -0.8, 0, -1],
        color: [this.color, this.color, this.color, this.color],
      },
      {
        position: [-0.1, -1.6, 0, -1, 0, -0.8, 0, -1.6, 0, -0.8, 0, -0.8],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [0, -1.8, 0, 1, 0, -1, 0, -1.6, -0.1, 0.8, 0, -1],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [0.1, -1.6, 0, 1, 0, -0.8, 0, -1.6, 0, 0.8, 0, -0.8],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [-0.1, 1.8, 0, 0.1, 1.8, 0, 0, 1.8, 0.1, 0, 1.8, -0.1],
        color: [this.color, this.color, this.color, this.color],
      },

      {
        position: [-0.1, -1.6, 0, 0.1, -1.6, 0, 0, -1.6, 0.1, 0, -1.6, -0.1],
        color: [this.color, this.color, this.color, this.color],
      },
    ];

    this.indices = [
      // Middle Front
      // outer
      0, 1, 2, 0, 2, 3,
      // inner
      6, 5, 4, 7, 6, 4,
      // top
      0, 3, 7, 0, 7, 4,
      // bottom
      1, 5, 6, 1, 6, 2,
      // left
      0, 4, 5, 0, 5, 1,
      // right
      3, 2, 6, 3, 6, 7,

      // Middle Back
      // outer
      10, 9, 8, 11, 10, 8,
      // inner
      12, 13, 14, 12, 14, 15,
      // top
      15, 11, 8, 12, 15, 8,
      // bottom
      14, 13, 9, 10, 14, 9,
      // left
      13, 12, 8, 9, 13, 8,
      // right
      14, 10, 11, 15, 14, 11,

      // Middle Left
      // outer
      16, 17, 18, 16, 18, 19,
      // // inner
      22, 21, 20, 23, 22, 20,
      // top
      16, 19, 23, 16, 23, 20,
      // bottom
      17, 21, 22, 17, 22, 18,
      // left
      16, 20, 21, 16, 21, 17,
      // right
      19, 18, 22, 19, 22, 23,

      // Middle Right
      // outer
      26, 25, 24, 27, 26, 24,
      // inner
      28, 29, 30, 28, 30, 31,
      // top
      31, 27, 24, 28, 31, 24,
      // bottom
      30, 29, 25, 26, 30, 25,
      // left
      29, 28, 24, 25, 29, 24,
      // right
      30, 26, 27, 31, 30, 27,

      // Top Front Left
      // Outer Front
      32, 33, 35, 32, 35, 34,
      // Outer Left
      33, 32, 36, 33, 36, 37,
      // Inner Front
      38, 34, 35, 38, 35, 39,
      // Inner Left
      38, 39, 37, 38, 37, 36,
      // Top cover
      32, 34, 38, 32, 38, 36,

      // Top Front Right
      // Outer Front
      43, 41, 40, 42, 43, 40,
      // Outer Left
      44, 40, 41, 45, 44, 41,
      // Inner Front
      43, 42, 46, 47, 43, 46,
      // Inner Left
      45, 47, 46, 44, 45, 46,
      // Top cover
      46, 42, 40, 44, 46, 40,

      // Top Back Left
      // Outer Back
      51, 49, 48, 50, 51, 48,
      // Outer Left
      52, 48, 49, 53, 52, 49,
      // Inner Back
      51, 50, 54, 55, 51, 54,
      // Inner Left
      53, 55, 54, 52, 53, 54,
      // Top cover
      54, 50, 48, 52, 54, 48,

      // Top Back Right
      // Outer Back
      56, 57, 59, 56, 59, 58,
      // Outer Right
      57, 56, 60, 57, 60, 61,
      // Inner Back
      62, 58, 59, 62, 59, 63,
      // Inner Right
      62, 63, 61, 62, 61, 60,
      // Top cover
      56, 58, 62, 56, 62, 60,

      // Bottom Front Left
      // Outer Front
      67, 65, 64, 66, 67, 64,
      // Outer Left
      68, 64, 65, 69, 68, 65,
      // Inner Front
      67, 66, 70, 71, 67, 70,
      // Inner Left
      69, 71, 70, 68, 69, 70,
      // Top cover
      70, 66, 64, 68, 70, 64,

      // Bottom Front Right
      // Outer Front
      72, 73, 75, 72, 75, 74,
      // Outer Left
      73, 72, 76, 73, 76, 77,
      // Inner Front
      78, 74, 75, 78, 75, 79,
      // Inner Left
      78, 79, 77, 78, 77, 76,
      // Top cover
      72, 74, 78, 72, 78, 76,

      // Bottom Back Left
      // Outer Back
      80, 81, 83, 80, 83, 82,
      // Outer Left
      81, 80, 84, 81, 84, 85,
      // Inner Back
      86, 82, 83, 86, 83, 87,
      // Inner Left
      86, 87, 85, 86, 85, 84,
      // Top cover
      80, 82, 86, 80, 86, 84,

      // Bottom Back Right
      // Outer Back
      91, 89, 88, 90, 91, 88,
      // Outer Right
      92, 88, 89, 93, 92, 89,
      // Inner Back
      91, 90, 94, 95, 91, 94,
      // Inner Right
      93, 95, 94, 92, 93, 94,
      // Top cover
      94, 90, 88, 92, 94, 88,

      // Pillar
      // Front Left
      98, 96, 100, 98, 100, 102,
      // Front Right
      97, 98, 102, 97, 102, 101,
      // Back Left
      96, 99, 103, 96, 103, 100,
      // Back Right
      99, 97, 101, 99, 101, 103,
    ];

    this.normals = this.createNormals();
  }

  updateColor(convertedColor) {
    this.color = convertedColor;
    this.vertices.forEach((vertex) => {
      const colorLength = vertex.color.length;
      vertex.color = Array(colorLength).fill(convertedColor);
    });
  }

  createNormals() {
    let tempNormals = [];
    for (let i = 0; i < this.vertices.length; i += 1) {
      for (let j = 0; j < this.vertices[i].position.length; j += 1) {
        if (j % 1 == 0) {
          tempNormals.push(this.vertices[i].position[j] > 0 ? 1.0 : -1.0);
        } else {
          if (this.vertices[i].position[j] == 0) {
            tempNormals.push(0.0);
          } else {
            tempNormals.push(this.vertices[i].position[j] > 0 ? 1.0 : -1.0);
          }
        }
      }
    }

    return tempNormals;
  }
}
