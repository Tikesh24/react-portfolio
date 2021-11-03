import { useState, useEffect, useRef, useContext } from 'react';
import ParticleAnimation from '../P5Components/ParticleAnimation';
import SkillChart from './SkillChart';
import { AppContext } from '../../pages';

function MySkills() {
    const { skills } = useContext(AppContext);
    const stageCanvasRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setWidth(stageCanvasRef.current.scrollWidth)
        setHeight(stageCanvasRef.current.scrollHeight)
    });


    return (
        <div className="welcome w-auto min-h-screen z-10 relative" ref={stageCanvasRef}>
            <div className="absolute">
                {/* Background with p5 animation */}
                {width > 0 ? <ParticleAnimation width={width} height={height} /> : null}
            </div>
            <div className="absolute w-auto h-auto md:h-screen z-10 grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1">
                <div className="pl-16 pt-12 pb-12 pr-16 md:pr-8">
                    <div className="text-2xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-pink-700 font-mono">
                        <h2>{skills.title}</h2>
                    </div>
                    <div className="break-words pt-6 text-base md:text-lg font-light">
                        {skills.discription.map((val, index)=>(<p key={index} className="p-2">{val.text}</p>))}
                    </div>
                    <a href={skills.link.href} className="text-pink-700 pt-8 text-base cursor-pointer"> 
                        {skills.link.text}
                    </a>
                </div>
                <div className="pl-16 pt-8 pr-16 md:pl-16 md:pt-12">
                    <SkillChart skills={skills} />
                </div>
            </div>
        </div>
    )
}


export default MySkills;