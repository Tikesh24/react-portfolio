import React, {useState} from "react";

import dynamic from "next/dynamic";

const Sketch = dynamic(
  () => {
    return import("react-p5");
  },
  { ssr: false }
);


let particles = [];
const HoverAnimation = (props) => {
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);
    console.log(width +" "+ height);

	const setup = (p5, canvasParentRef) => {
        particles = [];
        p5.createCanvas(width, height).parent(canvasParentRef);
        let minWeight = Math.min(window.innerHeight, window.innerWidth);
        const particlesLength = Math.min(Math.floor(minWeight / 10), 100);
        for(let i=0; i<particlesLength; i++) {
            particles.push(new Particle(p5));
        }
	};

	const draw = (p5) => {
		p5.background(5);
        particles.forEach((particle, idx) => {
            particle.update();
            particle.draw();
            particle.checkParticles(particles.slice(idx));
        });
	};

    class Particle {
        constructor(p5) {
            this.pos = p5.createVector(p5.random(width), p5.random(height));
            this.vel = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
            this.size = 5;


            this.update = ()=> {
                this.pos.add(this.vel);
                this.edges();
            }
            
            this.draw = ()=> {
                p5.noStroke();
                p5.fill('rgba(50, 139, 168, 0.2)');
                p5.circle(this.pos.x, this.pos.y, this.size * 2);
            }
            
            this.edges = ()=>{
                if(this.pos.x < 0 || this.pos.x > width) {
                    this.vel.x *= -1;
                }
                
                if(this.pos.y < 0 || this.pos.y > height) {
                    this.vel.y *= -1;
                }
            }
            
            this.checkParticles = (particles)=> {
                particles.forEach(particle => {
                    const d = p5.dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
                    if(d < 120) {
                        const alpha = p5.map(d, 0, 120, 0, 0.25)
                        p5.stroke(`rgba(255, 255, 255, ${alpha})`);
                        p5.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
                    }
                });
            }
        }
    }

	return <Sketch setup={setup} draw={draw} />;
};

export default HoverAnimation;