import Head from 'next/head'
import SideBar from '../components/Sidebar/SideBar'
import 'leaflet/dist/leaflet.css';
import {useState} from 'react';
import ListComponent from '../components/Sidebar/ListComponent';

export default function Home() {

  const [component , setComponent] = useState("Welcome");

  return (
    <div>
      <Head>
        <link rel="icon" className="w-10 h-10" href="/assests/logo2.png" />
        <title>DEVELOPER | DESIGNER</title>
      </Head>
      
      <div className="md:flex flex-col md:flex-row min-h-screen w-full relative">
        <SideBar setComponent={setComponent}/>
                        
        {/* <!-- content --> */}
        <div className="contentWrapper z-150 md:pl-64 flex-1 w-full absolute justify-end">
            <ListComponent component={component}/> 
        </div>
      </div>
    </div>
  )
}
