import Head from 'next/head'
import SideBar from '../components/SideBar/SideBar'
import 'leaflet/dist/leaflet.css';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" className="w-10 h-10" href="/assests/logo2.png" />
        <title>DEVELOPER | DESIGNER</title>
      </Head>
      
      <div className="md:flex flex-col md:flex-row min-h-screen w-full relative">
        <SideBar />
      </div>
    </div>
  )
}
