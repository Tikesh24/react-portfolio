import ParticleAnimation from "../P5Components/ParticleAnimation";
import React, { useEffect, useRef, useState } from "react";

const About = (props) => {

    const stageCanvasRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (stageCanvasRef.current) {
            console.log(stageCanvasRef);
            setHeight(stageCanvasRef.current.offsetHeight);
            setWidth((81 * stageCanvasRef.current.offsetParent.offsetWidth) / 100);
        }
    }, [stageCanvasRef]);

    return (
        <div className="absolute w-auto z-10" ref={stageCanvasRef}>
            <div className="relative min-h-screen min-w-screen top-0">
                <div className="absolute ">
                    {/* Background with p5 animation */}
                    {(width > 0) ? <ParticleAnimation width={width} height={height} /> : null}
                </div>
                <div className="relative p-12 md:top-24 md:left-20 md:p-0 z-400 w-9/12">
                    <div className="pl-16 pt-12 pr-16 md:pr-8">
                        <div className="text-2xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-pink-500 font-mono">
                            <h2>My, Myself & I</h2>
                        </div>
                        <div className="break-words font-light pt-6 text-base md:text-lg">
                            <p className="p-2">
                                I’m a Front-End Developer located in India.
                                I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                            </p>
                            <p className="p-2">
                                Well-organised person, problem solver, independent employee with high attention to detail. Fan of HP, outdoor activities, TV series and Art literature.
                            </p>
                            <p className="p-2">
                                A family person, Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                            </p>
                        </div>
                        <a className="text-pink-700 pt-8 text-base cursor-pointer" onClick={() => props.callComponent('Contact')}>Let’s make something special.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;