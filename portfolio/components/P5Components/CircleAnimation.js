import React, { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";

const Sketch = dynamic(
    () => {
        return import("react-p5");
    },
    { ssr: false }
);


let bubbles = [];
let x, y , z, r,b;
const CircleAnimation = (props) => {
    
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);
    console.log(width +" "+ height);

    useEffect(() => {
        setWidth(props.width);
        setHeight(props.height);
        console.log(width +" "+ height);
    },[props.width, props.height])

    
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(width, height).parent(canvasParentRef);
   
    };

    const draw = (p5) => {
        p5.background(5);
        for(let i =0; i <bubbles.length; i++){
            bubbles[i].show(p5);
            bubbles[i].move(p5);
        }
       
       if(bubbles.length > 20){
           bubbles.splice(0,1);
       }
    };

    
function mouseMoved(p5){
    r = p5.random(10,50);
    b = new Bubble(p5.mouseX, p5.mouseY,r, p5);
    bubbles.push(b);   
 
}

    class Bubble {
        constructor(x, y, r, p5) {
            this.x = x;
            this.y = y;
            this.r = r;
        }

        move = ( p5)=>{
            this.x = this.x + p5.random(-5, 5);
            this.y = this.y + p5.random(-5, 5);
        }
        
        show = ( p5)=>{
            
            p5.stroke(p5.random(255), p5.random(255), p5.random(255));
            p5.strokeWeight(4); 
            p5.noFill();
            p5.ellipse(this.x,this.y,this.r,this.r);
        }

        clicked = (px,py, p5)=>{
            let d = dist(px,py,this.x,this.y);
            if(d < this.r){
                console.log("Clicked");
            }
        }
        
        contains =(px,py, p5)=>{
            let d = dist(px,py,this.x,this.y);
            if(d < this.r){
                return true;
            }
            return false;
        }
    }

    return <Sketch setup={setup} draw={draw} mouseMoved={mouseMoved} />;
};

export default CircleAnimation;