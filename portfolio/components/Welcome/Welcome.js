import StarAnimation from '../P5Components/StarAnimation';
import React, { useEffect, useRef, useState } from "react";

const Welcome = () => {

    const stageCanvasRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if(stageCanvasRef.current){
            console.log(stageCanvasRef)
            setWidth(stageCanvasRef.current.offsetWidth)
            setHeight(stageCanvasRef.current.offsetHeight)
            const welcome = document.querySelector(".welcome");
            console.log(welcome)
        }
    }, [stageCanvasRef]);

    return (
        <div className="welcome w-auto min-h-screen z-10" ref={stageCanvasRef}>
            <div className="relative">
                <div className="absolute">
                    {/* Background with p5 animation */}
                {width>0 ?<StarAnimation width={width} height={height} /> : null}
                </div>
                <div className="absolute p-12 font-audiowide md:top-24 md:left-20 md:p-0">
                    {/* Text with Hi I'am Tikesh, Developer | Front End | Backend */}
                    <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                        <strong className="flex">
                            <p className="hover:animate-bounce hover:text-green-300">H</p>
                            <p className="hover:animate-bounce">i</p>
                        </strong>
                        <strong className="flex">
                            <p className="hover:animate-bounce hover:text-green-300">I'</p>
                            <p className="hover:animate-bounce hover:text-green-300">m</p>
                            <p className="hover:animate-bounce hover:text-green-300">&nbsp;</p>
                            <p className="hover:animate-bounce  text-purple-800">T</p>
                            <p className="hover:animate-bounce hover:text-green-300">i</p>
                            <p className="hover:animate-bounce hover:text-green-300">k</p>
                            <p className="hover:animate-bounce hover:text-green-300">e</p>
                            <p className="hover:animate-bounce hover:text-green-300">s</p>
                            <p className="hover:animate-bounce hover:text-green-300">h</p>
                        </strong> 
                        <strong className="flex">
                            <p className="hover:animate-bounce hover:text-green-300">d</p>
                            <p className="hover:animate-bounce hover:text-green-300">e</p>
                            <p className="hover:animate-bounce hover:text-green-300">v</p>
                            <p className="hover:animate-bounce hover:text-green-300">e</p>
                            <p className="hover:animate-bounce hover:text-green-300">l</p>
                            <p className="hover:animate-bounce hover:text-green-300">o</p>
                            <p className="hover:animate-bounce hover:text-green-300">p</p>
                            <p className="hover:animate-bounce hover:text-green-300">e</p>
                            <p className="hover:animate-bounce hover:text-green-300">r</p>
                        </strong>
                        <div className="text-base tracking-wider xs:tracking-widest sm:tracking-widest md:tracking-widest lg:tracking-widest sm:text-2xl md:text-2xl pt-10 text-gray-600 ">Frontend | Backend</div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Welcome
