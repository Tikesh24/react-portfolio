import {useState, useEffect} from 'react';
import WorkThumbnail from './WorkThumbnail';
const workList = [
    {
        "id":1,
        "work":"Clone: Hulu",
        "date":"Oct 2021",
        "thumbicon":"NA",
        "url":"../../public/assests/work/hulu.png",
        "discription":"A clone of HULU based on TMDB api and using NextJS, Tailwind and Leaflet."
    },
    {
        "id":2,
        "work":"Clone: MovieDB",
        "date":"Sep 2021",
        "thumbicon":"NA",
        "url":"../../public/assests/work/hulu.png",
        "discription":"A clone of MovieDB based on TMDB api and ReactJS."
    },
    {
        "id":3,
        "work":"Ideathone: Varys: Game of automata",
        "date":"Aug 2020",
        "thumbicon":"NA",
        "url":"../../public/assests/work/hulu.png",
        "discription":"Created an automation tool capable of recording events, adding image validation and replaying events."
    },
    {
        "id":4,
        "work":"Frelance: Unknown",
        "date":"Jan 2018 - Sep 2021",
        "thumbicon":"NA",
        "url":"NA",
        "discription":"Providing support to client with tech stacks for both back and front end."
    },
    {
        "id":5,
        "work":"Full Time: Digitate",
        "date":"Current",
        "thumbicon":"/../public/assests/work/digitate.png",
        "url":"../../public/assests/work/hulu.png",
        "discription":"Working as full stack developer, automating different areas of SAP Basis."
    }
]

function Work() {
    return (
        <div  className="absolute w-auto z-10"> 
            <div className="pl-16 pt-12 pr-16 md:pr-8">
                <div className="text-2xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-pink-500 font-mono">
                    <h2>My work</h2>
                </div>
                <div className="mb-4">
                    {
                        workList.map((res)=>( 
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
    )
}


export default Work;