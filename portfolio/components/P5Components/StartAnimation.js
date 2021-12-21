import React from "react";
import dynamic from "next/dynamic";

const Sketch = dynamic(
  () => {
    return import("react-p5");
  },
  { ssr: false }
);

class Star {
    
    width = window.innerWidth;
    height = window.innerHeight;

    constructor(p5){
        this.x = p5.random(-this.width, this.width);
        this.y = p5.random(-this.height, this.height);
        this.z = p5.random(this.width);
        this.pz = this.z;
    }

    update = function(p5) {
        this.z = this.z - speed;
        if (this.z < 1) {
        this.z = this.width;
        this.x = p5.random(-this.width, this.width);
        this.y = p5.random(-this.height, this.height);
        this.pz = this.z;
        }
    };

    show = function(p5) {
        p5.fill(255);
        p5.noStroke();

        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);

        var r = map(this.z, 0, width, 9, 0);
        p5.ellipse(sx, sy, r, r);

        var px = map(this.x / this.pz, 0, 1, 0, width);
        var py = map(this.y / this.pz, 0, 1, 0, height);

        this.pz = this.z;

        p5.stroke(255);
        lp5.ine(px, py, sx, sy);
    };
}

class StarAnimation extends React.Component {

    
    speed;
    windowWidth = 0;
    windowHeight = 0;
    stars = [];

    componentDidMount(){
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.stars = [];
    }

    setup(p5, canvasParentRef) {
        p5.createCanvas(this.windowWidth, this.windowHeight).parent(canvasParentRef);
        for (let i = 0; i < 800; i++) {
            let st = new Star(p5);
            this.stars.push(st)
        }
    }

    draw(p5) {
        this.speed = map(mouseX, 0, width, 0, 50);
        p5.background(0);
        p5.translate(width / 2, height / 2);
        for (let i = 0; i < stars.length; i++) {
            this.stars[i].update(p5);
            this.stars[i].show(p5);
        }
    }

    render() {
        return (<Sketch setup={this.setup} draw={this.draw} />);
    }
}

export default StarAnimation;