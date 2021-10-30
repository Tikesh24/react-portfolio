import React, { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";

const Sketch = dynamic(
    () => {
        return import("react-p5");
    },
    { ssr: false }
);


let stars = [];
let speed;
const StarAnimation = (props) => {
    
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);
    console.log(width +" "+ height);

    useEffect(() => {
        setWidth(props.width);
        setHeight(props.height);
        console.log(width +" "+ height);
    },[props.width,props.height])

    
    const setup = (p5, canvasParentRef) => {
        stars = [];
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(width, height).parent(canvasParentRef);
        for (let i = 0; i < 800; i++) {
            stars[i] = new Star(p5);
        }
    };

    const draw = (p5) => {
        let mouseXaxis = (p5.mouseX <= 0) ? 15 : p5.mouseX;
        let mouseYaxis = (p5.mouseX >= 20) ? 20 : p5.mouseX;
        speed = p5.map(mouseXaxis, 0, width, 0, 20);
        p5.background(0);
        p5.translate(width / 2, height / 2);
        for (let i = 0; i < stars.length; i++) {
            stars[i].update();
            stars[i].show();
        }
    };

    class Star {
        constructor(p5) {
            this.x = p5.random(-width, width);
            this.y = p5.random(-height, height);
            this.z = p5.random(width);
            this.pz = this.z;

            this.update = function () {
                this.z = this.z - speed;
                if (this.z < 1) {
                    this.z = width;
                    this.x = p5.random(-width, width);
                    this.y = p5.random(-height, height);
                    this.pz = this.z;
                }
            };

            this.show = function () {
                p5.fill(255);
                p5.noStroke();

                var sx = p5.map(this.x / this.z, 0, 1, 0, width);
                var sy = p5.map(this.y / this.z, 0, 1, 0, height);

                var r = p5.map(this.z, 0, width, 9, 0);
                p5.ellipse(sx, sy, r, r);

                var px = p5.map(this.x / this.pz, 0, 1, 0, width);
                var py = p5.map(this.y / this.pz, 0, 1, 0, height);

                this.pz = this.z;

                p5.stroke(255);
                p5.line(px, py, sx, sy);
            };
        }
    }

    return <Sketch setup={setup} draw={draw} />;
};

export default StarAnimation;