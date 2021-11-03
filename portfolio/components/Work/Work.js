import { useState, useEffect, useContext, useRef } from 'react';
import WorkThumbnail from './WorkThumbnail';
import { AppContext } from '../../pages';
import ParticleAnimation from '../P5Components/ParticleAnimation';

function Work() {
    const { work } = useContext(AppContext);
    const stageCanvasRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setWidth(stageCanvasRef.current.scrollWidth)
        setHeight(stageCanvasRef.current.scrollHeight)
    });

    return (
        <div className="welcome w-auto min-h-screen z-10 relative"  ref={stageCanvasRef}>
            <div className="absolute">
                {/* Background with p5 animation */}
                {width > 0 ? <ParticleAnimation width={width} height={height} /> : null}
            </div>
            <div className="w-auto z-10">
                <div className="pl-16 pt-12 pr-16 md:pr-8">
                    <div className="text-2xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-pink-500 font-mono">
                        <h2>{work.title}</h2>
                    </div>
                    <div className="mb-4">
                        {
                            work.worklist.map((res) => (
                                <WorkThumbnail
                                    key={res.id}
                                    work={res.work}
                                    date={res.date}
                                    thumbicon={res.thumbicon}
                                    url={res.url}
                                    discription={res.discription}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Work;