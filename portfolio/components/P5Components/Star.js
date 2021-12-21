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

export default Star;