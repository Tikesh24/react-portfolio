import { server } from '../../config';
import StarAnimation from '../P5Components/StarAnimation';
import React, { useEffect, useRef, useState , useContext } from "react";
import { AppContext } from '../../pages';

const Welcome = () => {
    const { welcome } = useContext(AppContext);
    console.log(welcome)
    const stageCanvasRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if(stageCanvasRef.current){
            console.log(stageCanvasRef)
            setWidth(stageCanvasRef.current.offsetWidth)
            setHeight(stageCanvasRef.current.offsetHeight)
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

                        {welcome.title.map((val)=>(
                            <strong className="flex">
                                {val.text.split("").map((letter)=>(
                                    <p className="hover:animate-bounce hover:text-green-300">{letter === '|' ?<span>&nbsp;</span> : letter }</p>
                                ))}
                            </strong>
                        ))}
                        
                        <div className="text-base tracking-wider xs:tracking-widest sm:tracking-widest md:tracking-widest lg:tracking-widest sm:text-2xl md:text-2xl pt-10 text-gray-600 ">{welcome.shorttext}</div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Welcome