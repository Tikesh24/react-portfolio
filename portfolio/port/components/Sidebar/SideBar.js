import Welcome from '../Welcome/Welcome';
import LOGO_PNG from '../../public/assests/logo2.png'
import Image from 'next/image';
import {useState} from 'react';
import About from '../About/About';
import ListComponent from './ListComponent';
import SocialLink from './SocialLink';

const SideBar = () => {

    const [isToggled, setIsToggel] = useState(false);
    const [showComponent, setComponent] = useState("Welcome");
    // add our event listener for the click
    const toggleBtn = (e) => {
        const sidebar = document.querySelector(".sidebar");contentWrapper
        const contentWrapper = document.querySelector(".contentWrapper");
        sidebar.classList.toggle("-translate-x-full");
        sidebar.classList.remove("w-64");
        sidebar.classList.add("w-full");
        document.querySelector(".sidebarlogo").classList.add("w-24");
        document.querySelector(".sidebarlogo").classList.add("h-24");
        (isToggled) ? setIsToggel(false) : setIsToggel(true);
    }

    const callComponent = (component)=>{
        setComponent(component);
    }

    return (
        <div className="absolute w-full z-50">
            <div className="sidebarparent relative min-h-screen md:flex">

                {/* <!-- mobile menu bar --> */}
                <div className="bg-transparent text-gray-100 flex justify-between md:hidden">
                    {/* <!-- logo --> */}
                    <a href="#" className="block p-4" onClick={()=>setComponent('Welcome')}>
                        <Image width="25" height="25" src={LOGO_PNG}/>
                    </a>

                    {/* <!-- mobile menu button --> */}
                    { 
                        !isToggled ?
                        <button className="mobile-menu-button p-4 focus:outline-none z-400" onClick={toggleBtn}>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                        </button> :
                        <button className="p-4 focus:outline-none z-300" onClick={toggleBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    }

                    
                </div>

                {/* <!-- sidebar --> */}
                <div className="z-200 sidebar bg-[#141414] text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                    {/* <!-- logo --> */}
                    <div className="m-auto text-center sm:block md:block lg:block cur"  onClick={()=>callComponent('Welcome')}>
                        <div href="#" className="relative sidebarlogo m-auto h-44 w-44">
                            <Image src={LOGO_PNG}/>
                        </div>
                        <h1 className="font-extrabold text-2xl">Tikesh Verma</h1>
                        <h5 className="text-gray-100">Developer</h5>
                    </div>

                    {/* <!-- nav --> */}
                    <nav className="text-center">
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-400 hover:text-white" onClick={()=>{callComponent('About')}}>
                        About
                        </a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-500 hover:text-white" onClick={()=>{callComponent('Skills')}}>
                        My Skills
                        </a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white" onClick={()=>{callComponent('Work')}}>
                        Work
                        </a>
                        {/* <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white" onClick={()=>{callComponent('ArtGallery')}}>
                        Art Gallery
                        </a> */}
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-900 hover:text-white" onClick={()=>{callComponent('Contact')}}>
                        Contact
                        </a>
                    </nav>
                    <SocialLink />
                </div>
                
                {/* <!-- content --> */}
                <div className="contentWrapper z-150 xs:w-full sm:w-full md:pl-64 flex-1 text-2xl font-bold w-full top-0 left-0 absolute justify-end ">
                   <ListComponent component={showComponent} callComponent={callComponent}/> 
                </div>
            </div>
        </div>
    )
}

export default SideBar;