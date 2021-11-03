import dynamic from 'next/dynamic';
const MyAwesomeMap = dynamic(() => import('../MapLeaflet/MapLeaflet'), { ssr: false });
import React, { useEffect, useRef, useState } from "react";
import CircleAnimation from '../P5Components/CircleAnimation';

function Contact() {

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
        <div className="welcome w-auto z-10 relative" ref={stageCanvasRef}>
            <div className="absolute">
                {/* Background with p5 animation */}
                {width > 0 && height > 0 ? <CircleAnimation width={width} height={height} /> : null}
            </div>

            <div className="absolute w-auto h-auto md:h-screen z-10 grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 pb-4">
                <div className="pl-16 pt-12 pb-16 pr-16 md:pr-8">
                    <div className="text-2xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-pink-700 font-mono">
                        <h2>Contact me</h2>
                    </div>
                    <div className="break-words pt-6 text-base md:text-lg font-light">
                        <p className="p-2">
                            I’m interested in freelance opportunities – especially ambitious or large projects.
                            However, if you have other request or question, don’t hesitate to use the form.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2 font-extralight">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2" >
                            <div>
                                <input className="form-input h-10 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 focus:border-blue-600 transition duration-500 ease-in p-4" placeholder="Name" />
                            </div>
                            <div>
                                <input className="form-input h-10 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 focus:border-blue-600 transition duration-500 ease-linear p-4" placeholder="Email" />
                            </div>
                        </div>
                        <div>
                            <input className="form-input h-10 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 focus:border-blue-600 transition duration-500 ease-linear p-4" placeholder="Subject" />
                        </div>
                        <div>
                            <textarea className="form-input h-48 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 focus:border-blue-700 transition duration-500 ease-linear p-6" placeholder="Message" />
                        </div>
                        <div className="text-right">
                            <button
                                className="bg-transparent border border-blue-500 text-white hover:bg-blue-400 hover:text-black transition duration-300 ease-linear tracking-widest uppercase text-sm px-6 py-3 shadow" type="button">
                                Send Message!
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pl-16 pt-8 pr-16 md:pl-16 md:pt-12">
                    <MyAwesomeMap />
                </div>
            </div>
        </div>
    )
}

export default Contact