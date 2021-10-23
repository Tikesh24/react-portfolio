import dynamic from 'next/dynamic';
const MyAwesomeMap = dynamic(() => import('../MapLeaflet/MapLeaflet'), { ssr: false });
import React, { useEffect, useRef, useState } from "react";
import ParticleAnimation from "../P5Components/ParticleAnimation";

function Contact() {

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
        <div className="absolute w-auto z-10">
            <div className="relative">
                <div className="relative">
                    <div className="pl-16 pt-12 pr-16 md:pr-8" >
                        <div className="text-2xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-pink-700 font-mono">
                            <h2>Contact me</h2>
                        </div>
                        <div className="break-words font-light sm:w-full text-base md:text-lg">
                            <p className="p-1 mb-2">
                                I’m interested in freelance opportunities – especially ambitious or large projects.
                                However, if you have other request or question, don’t hesitate to use the form.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 font-extralight">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2" >
                                <div>
                                    <input className="form-input h-10 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 focus:border-blue-600 transition duration-500 ease-in" placeholder="   Name" />
                                </div>
                                <div>
                                    <input className="form-input h-10 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 focus:border-blue-600 transition duration-500 ease-linear" placeholder="   Email" />
                                </div>
                            </div>
                            <div>
                                <input className="form-input h-10 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 focus:border-blue-600 transition duration-500 ease-linear" placeholder="   Subject" />
                            </div>
                            <div>
                                <textarea className="form-input h-48 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 focus:border-blue-700 transition duration-500 ease-linear" placeholder="   Message" />
                            </div>
                            <div className="text-right">
                                <button
                                    className="bg-transparent border border-blue-500 text-white hover:bg-blue-400 hover:text-black transition duration-300 ease-linear tracking-widest uppercase text-sm px-6 py-3 shadow" type="button">
                                    Send Message!
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pl-16 pt-8 pr-16 md:pl-16 md:pt-12 pb-8 my-auto">
                        <MyAwesomeMap />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact