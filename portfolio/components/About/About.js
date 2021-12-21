import ParticleAnimation from "../P5Components/ParticleAnimation";
import React, { useEffect, useRef, useState, useContext } from "react";
import TechStack from "../TechStack/TechStack";
import { AppContext } from '../../pages';

const About = (props) => {

    const { about } = useContext(AppContext);

    const stageCanvasRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setWidth(stageCanvasRef.current.scrollWidth)
            setHeight(stageCanvasRef.current.scrollHeight)
        }, 500);
        return () => clearTimeout(timer);
    });

    return (
        <div className="welcome w-auto min-h-screen z-10 relative">
            <div className="absolute">
                {/* Background with p5 animation */}
                {width > 0 && height > 0 ? <ParticleAnimation width={width} height={height} /> : null}
            </div>
            <div className="absolute w-auto h-auto md:h-screen z-10 grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 pb-4" ref={stageCanvasRef}>
                <div className="pl-16 pt-12 pr-16 md:pr-8 md:pt-36">
                    <div className="text-2xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-pink-700 font-mono">
                        <h2>{about.title}</h2>
                    </div>
                    <div className="break-words pt-6 text-base md:text-lg font-light">
                        {about.discription.map((val, index) => (<p key={index} className="p-2">{val.text}</p>))}
                    </div>
                    <a className="text-pink-700 pt-8 text-base cursor-pointer"> Visit my LinkedIn profile for more details or just contact me.</a>
                </div>
                <div className="pt-8 md:pl-16 md:pt-36 mx-auto">
                    {/* {width > 0 && height > 0 ? <TechStack width={width} height={height} /> : null} */}
                    <TechStack width={width} height={height} skillset={about.skillset}/>
                </div>
            </div>
        </div>
    )
}

export default React.memo(About);