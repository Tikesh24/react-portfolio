import { useState, useEffect, useRef } from 'react';
import ParticleAnimation from '../P5Components/ParticleAnimation';
import SkillChart from './SkillChart';

function MySkills() {

    const stageCanvasRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (stageCanvasRef.current) {
            console.log(stageCanvasRef)
            setWidth(stageCanvasRef.current.offsetWidth)
            setHeight(stageCanvasRef.current.offsetHeight)
        }
    }, [stageCanvasRef]);


    return (
        <div className="welcome w-auto min-h-screen z-10 relative">
            <div className="absolute">
                {/* Background with p5 animation */}
                {width > 0 ? <ParticleAnimation width={width} height={height} /> : null}
            </div>
            <div className="absolute w-auto h-auto md:h-screen z-10 grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1" ref={stageCanvasRef}>
                <div className="pl-16 pt-12 pb-12 pr-16 md:pr-8">
                    <div className="text-2xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-pink-700 font-mono">
                        <h2>Skills & <br />Experience</h2>
                    </div>
                    <div className="break-words pt-6 text-base md:text-lg font-light">
                        <p className="p-2">
                            Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
                        </p>
                        <p className="p-2">
                            I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
                        </p>
                        <p>
                            I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
                        </p>
                    </div>
                    <a className="text-pink-700 pt-8 text-base cursor-pointer"> Visit my LinkedIn profile for more details or just contact me.</a>
                </div>
                <div className="pl-16 pt-8 pr-16 md:pl-16 md:pt-12">
                    <SkillChart />
                </div>
            </div>
        </div>
    )
}


export default MySkills;