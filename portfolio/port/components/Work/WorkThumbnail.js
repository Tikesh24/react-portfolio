import Image from 'next/image';
import NO_IMAGE from '../../public/assests/noimage.png'
import {ExternalLinkIcon} from '@heroicons/react/outline'
import {CalendarIcon} from '@heroicons/react/outline'

const WorkThumbnail = ({work,date,thumbicon,url,discription}) =>{
    return (

        <div className="pt-8 font-light focus:border-b-2">
            <div className="relative pt-4 grid grid-cols-1 gap-2">
                <div className="rounded overflow-hidden shadow-lg bg-black">
                    <div className ="px-6 py-4 grid grid-cols-5 hover:border-2 border-transparent hover:border-green-600 transition delay-100 ease-in-out">
                        <div className="col-span-1 col-start-1">
                            <Image width="250" height="250" src={thumbicon!=="NA" && thumbicon!== undefined ?`${thumbicon}`:NO_IMAGE} />
                        </div>
                        <div className="col-span-4 col-start-2 pl-8 my-auto">
                            <div className ="text-2xl font-semibold tracking-widest pb-2 flex">
                                <h6 className="text-2xl pl-2 text-green-500">{work}</h6>
                            </div>
                            <div className ="text-sm mb-2 font-extralight flex">
                                <CalendarIcon className="h-6 text-base" />
                                <h6 className="text-base pl-2">{date}</h6>
                            </div>
                            <p className ="text-base text-green-500">{discription}</p>
                            <div className="pt-4">
                                <div className="w-6 hover:animate-bounce hover:text-green-400"><a href="#"><ExternalLinkIcon className="h-7 mt-1 mb-1 group-hover:animate-bounce" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkThumbnail
