import { PlusIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import LOGO_PNG from '../public/assests/logo2.png'
const SideBar = () => {
    return (
        <div className="flex flex-col w-full md:w-64 bg-[#141414] dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
            <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                <div className="m-auto text-center">
                    <a href="#" className="text-lg font-semibold tracking-widest uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"><Image src={LOGO_PNG}/></a>
                    <h1 className="font-extrabold text-2xl">Tikesh Verma</h1>
                    <h5 className="text-gray-100">Developer</h5>
                </div>
                <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline transform rotate-45"><PlusIcon className="w-8 h-8" /></button>
            </div>
            <nav className="flex-grow md:block px-4 pb-4 md:pb-0 px-0 md:overflow-y-auto text-center">
                <div className="block px-4 py-2 mt-2 text-xl font-semibold text-gray-100 border-t border-light-100" href="#">Blog</div>
                <div className="block px-4 py-2 mt-2 text-xl font-semibold text-gray-100 border-t border-light-100" href="#">Portfolio</div>
                <div className="block px-4 py-2 mt-2 text-xl font-semibold text-gray-100 border-t border-light-100" href="#">About</div>
                <div className="block px-4 py-2 mt-2 text-xl font-semibold text-gray-100 border-t border-b border-light-100" href="#">Contact</div>
            </nav >
        </div >
    )
}

export default SideBar;