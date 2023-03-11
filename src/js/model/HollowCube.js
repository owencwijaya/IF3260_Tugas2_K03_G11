class HollowCube {
  constructor(color = [0.0, 1.0, 0.0, 1.0]) {
    this.color = color;
    this.vertices = [
      {
        // top
        position: [
          -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
        ],
        color: this.color,
      },
      {
        // left
        position: [
          -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0,
        ],
        color: this.color,
      },
      {
        // right
        position: [
          1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0,
        ],
        color: this.color,
      },
      {
        // front
        position: [
          1.0, 1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0,
        ],
        color: this.color,
      },
      {
        // back
        position: [
          1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0,
        ],
        color: this.color,
      },
      {
        // bottom
        position: [
          -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0,
        ],
        color: this.color,
      },
      {
        // inner top
        position: [
          -0.8, 0.8, -0.8, -0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, -0.8,
        ],
        color: this.color,
      },
      {
        // inner left
        position: [
          -0.8, 0.8, 0.8, -0.8, -0.8, 0.8, -0.8, -0.8, -0.8, -0.8, 0.8, -0.8,
        ],
        color: this.color,
      },
      {
        // right
        position: [
          0.8, 0.8, 0.8, 0.8, -0.8, 0.8, 0.8, -0.8, -0.8, 0.8, 0.8, -0.8,
        ],
        color: this.color,
      },
      {
        // inner front
        position: [
          0.8, 0.8, 0.8, 0.8, -0.8, 0.8, -0.8, -0.8, 0.8, -0.8, 0.8, 0.8,
        ],
        color: this.color,
      },
      {
        // inner back
        position: [
          0.8, 0.8, -0.8, 0.8, -0.8, -0.8, -0.8, -0.8, -0.8, -0.8, 0.8, -0.8,
        ],
        color: this.color,
      },
      {
        // inner bottom
        position: [
          -0.8, -0.8, -0.8, -0.8, -0.8, 0.8, 0.8, -0.8, 0.8, 0.8, -0.8, -0.8,
        ],
        color: this.color,
      },
    ];
    this.indices = this.createIndices();
  }

  createIndices() {
    const indices = [];
    for (let i = 0; i < this.vertices.length; i++) {
      const offset = i * 4;
      indices.push(
        0 + offset,
        1 + offset,
        2 + offset,
        0 + offset,
        2 + offset,
        3 + offset
      );
    }
    return indices;
  }
}
