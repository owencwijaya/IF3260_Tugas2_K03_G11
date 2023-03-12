class HollowTrianglePrisma{
    
    constructor(color = [0.0, 0.0, 1.0, 1.0]) {
        
        this.color = color;
        this.vertices = [
            {
                // front triangle
                position: [
                  -1.0, -1.0, 1.0, // bottom left
                  1.0, -1.0, 1.0, // bottom right
                  0.0, 1.0, 0.0, // top center
                ],
                color: [this.color, this.color, this.color],
            },
            {
                // back triangle
                position: [
                  -1.0, -1.0, -1.0, // bottom left
                  1.0, -1.0, -1.0, // bottom right
                  0.0, 1.0, 0.0, // top center
                ],
                color: [this.color, this.color, this.color],
            },
            {
                // bottom square
                position: [
                  -1.0, -1.0, 1.0, // bottom left front
                  1.0, -1.0, 1.0, // bottom right front
                  1.0, -1.0, -1.0, // bottom right back
                  -1.0, -1.0, -1.0, // bottom left back
                ],
                color: [this.color, this.color, this.color, this.color],
            },
            {
                // left square
                position: [
                    -1.0, -1.0, 1.0, // bottom left front
                    -1.0, -1.0, -1.0, // bottom left back
                    0.0, 1.0, 0.0, // top center front
                    0.0, 1.0, 0.0, // top center back
                ],
                color: [this.color, this.color, this.color, this.color],
            },
            {
                // right square
                position: [
                    1.0, -1.0, 1.0, // bottom right front
                    1.0, -1.0, -1.0, // bottom right back
                    0.0, 1.0, 0.0, // top center front
                    0.0, 1.0, 0.0, // top center back
                ],
                color: [this.color, this.color, this.color, this.color],
            },
            {
                // inner triangle front
                position: [
                    -0.8, -0.8, 1.0, // bottom left
                    0.8, -0.8, 1.0, // bottom right
                    0.0, 0.8, 0.0, // top center
                ],
                color: [this.color, this.color, this.color],
            },
            {
                // inner triangle back
                position: [
                    -0.8, -0.8, -1.0, // bottom left
                    0.8, -0.8, -1.0, // bottom right
                    0.0, 0.8, 0.0, // top center
                ],
                color: [this.color, this.color, this.color],
            },
            {
                // inner bottom square
                position: [
                    -0.8, -0.8, 0.8, // bottom left front
                    0.8, -0.8, 0.8, // bottom right front
                    0.8, -0.8, -0.8, // bottom right back
                    -0.8, -0.8, -0.8, // bottom left back
                ],
                color: [this.color, this.color, this.color, this.color],
            },
            {
                // inner left square    
                position: [
                    -0.8, -0.8, 1.0, // bottom left front
                    -0.8, -0.8, -1.0, // bottom left back
                    0.0, 0.8, 0.0, // top center front
                    0.0, 0.8, 0.0, // top center back
                ],
                color: [this.color, this.color, this.color, this.color],
            },
            {
                // inner right square
                position: [
                    0.8, -0.8, 1.0, // bottom right front
                    0.8, -0.8, -1.0, // bottom right back
                    0.0, 0.8, 0.0, // top center front
                    0.0, 0.8, 0.0, // top center back
                ],
                color: [this.color, this.color, this.color, this.color],
            },{
                // hollow triangle front
                position: [
                    -0.25, -0.25, 0.5, // bottom left
                    0.25, -0.25, 0.5, // bottom right
                    0.0, 0.25, 0.0, // top center
                ],
                color: [this.color, this.color, this.color],
            },
            {
                // hollow triangle back
                position: [
                    -0.25, -0.25, -0.5, // bottom left
                    0.25, -0.25, -0.5, // bottom right
                    0.0, 0.25, 0.0, // top center
                ],
                color: [this.color, this.color, this.color],
            },
            {
                // hollow bottom square
                position: [
                    -0.25, -0.25, 0.5, // bottom left front
                    0.25, -0.25, 0.5, // bottom right front
                    0.25, -0.25, -0.5, // bottom right back
                    -0.25, -0.25, -0.5, // bottom left back
                ],
                color: [this.color, this.color, this.color, this.color],
            },
            {
                // hollow left square
                position: [
                    -0.25, -0.25, 0.5, // bottom left front
                    -0.25, -0.25, -0.5, // bottom left back
                    0.0, 0.25, 0.0, // top center front
                    0.0, 0.25, 0.0, // top center back
                ],
                color: [this.color, this.color, this.color, this.color],
            },
            {
                // hollow right square
                position: [
                    0.25, -0.25, 0.5, // bottom right front
                    0.25, -0.25, -0.5, // bottom right back
                    0.0, 0.25, 0.0, // top center front
                    0.0, 0.25, 0.0, // top center back
                ],
                color: [this.color, this.color, this.color, this.color],
            },
        ];        
        this.indices = this.createIndices();
    }
    
    createIndices(){
        
        const indices = [];

        // // Top and bottom faces
        // for (let i = 0; i < numVerticesPerTriangle; i++) {
        //     indices.push(i);
        //     indices.push((i + 1) % numVerticesPerTriangle);
        //     indices.push(numVerticesPerTriangle + i);

        //     indices.push(numVerticesPerTriangle + i);
        //     indices.push((i + 1) % numVerticesPerTriangle);
        //     indices.push(numVerticesPerTriangle + (i + 1) % numVerticesPerTriangle);
        // }

        // // Side faces
        // for (let i = 0; i < numVerticesPerTriangle; i++) {
        //     indices.push(i);
        //     indices.push(numVerticesPerTriangle + i);
        //     indices.push(numVerticesPerTriangle + (i + 1) % numVerticesPerTriangle);

        //     indices.push(numVerticesPerTriangle + (i + 1) % numVerticesPerTriangle);
        //     indices.push((i + 1) % numVerticesPerTriangle);
        //     indices.push(i);
        // }

        // return indices;
    }
}