class HollowTrianglePrism {
    constructor(color = [0.0, 1.0, 0.0, 1.0]) {
      this.color = color;
  
      this.vertices = [
        {
          // top
          position: [
            -1.0, 0.0, -1.0,
            -1.0, 0.0, 1.0,
            1.0, 1.0, 1.0, 
            1.0, 1.0, -1.0,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // bottom
          position: [
            -1.0, 0.0, -1.0, 
            -1.0, 0.0, 1.0, 
            1.0, -1.0, 1.0, 
            1.0, -1.0, -1.0,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
  
        {
          // left
          position: [
            -1.0, 0.0, 1.0,
            -1.0, 0.0, 1.0, 
            -1.0, 0.0, -1.0, 
            -1.0, 0.0, -1.0,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // right
          position: [
            1.0, 1.0, 1.0, 
            1.0, -1.0, 1.0, 
            1.0, -1.0, -1.0, 
            1.0, 1.0, -1.0,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // front
          position: [
            1.0, 1.0, 1.0, 
            1.0, -1.0, 1.0, 
            -1.0, 0.0, 1.0, 
            -1.0, 0.0, 1.0,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
  
        {
          // back
          position: [
            1.0, 1.0, -1.0, 
            1.0, -1.0, -1.0, 
            -1.0, 0.0, -1.0,
            -1.0, 0.0, -1.0,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
  
        {
          // inner top
          position: [
            -0.8, 0.0, -0.8,
            -0.8, 0.0, 0.8,
            0.8, 0.8, 0.8, 
            0.8, 0.8, -0.8,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // inner bottom
          position: [
            -0.8, 0.0, -0.8, 
            -0.8, 0.0, 0.8, 
            0.8, -0.8, 0.8, 
            0.8, -0.8, -0.8,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // inner left
          position: [
            -0.8, 0.0, 0.8,
            -0.8, 0.0, 0.8, 
            -0.8, 0.0, -0.8, 
            -0.8, 0.0, -0.8,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // inner right
          position: [
            0.8, 0.8, 0.8, 
            0.8, -0.8, 0.8, 
            0.8, -0.8, -0.8, 
            0.8, 0.8, -0.8,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // inner front
          position: [
            0.8, 0.8, 0.8, 
            0.8, -0.8, 0.8, 
            -0.8, 0.0, 0.8, 
            -0.8, 0.0, 0.8,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // inner back
          position: [
            0.8, 0.8, -0.8, 
            0.8, -0.8, -0.8, 
            -0.8, 0.0, -0.8, 
            -0.8, 0.0, -0.8,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
  
        {
          // hollow top
          position: [
            -0.8, 0.0, -0.8, 
            -0.8, 0.0, 0.8, 
            0.8, 1.0, 0.8, 
            0.8, 1.0, -0.8,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // hollow bottom
          position: [
            -0.8, 0.0, -0.8, 
            -0.8, 0.0, 0.8, 
            0.8, -1.0, 0.8, 
            0.8, -1.0, -0.8,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // hollow left
          position: [
            -1.0, 0.0, 0.8, 
            -1.0, 0.0, 0.8, 
            -1.0, 0.0, -0.8, 
            -1.0, 0.0, -0.8,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // hollow right
          position: [
            1.0, 0.8, 0.8, 
            1.0, -0.8, 0.8, 
            1.0, -0.8, -0.8, 
            1.0, 0.8, -0.8,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // hollow front
          position: [
            0.8, 0.8, 1.0, 
            0.8, -0.8, 1.0, 
            -0.8, 0.0, 1.0, 
            -0.8, 0.0, 1.0,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
        {
          // hollow back
          position: [
            0.8, 0.8, -1.0, 
            0.8, -0.8, -1.0, 
            -0.8, 0.0, -1.0, 
            -0.8, 0.0, -1.0,
          ],
          color: [this.color, this.color, this.color, this.color],
        },
      ];
      this.indices = this.createIndices(48);
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
  }
  