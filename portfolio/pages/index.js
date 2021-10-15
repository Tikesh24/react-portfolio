import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'
import Welcome from '../components/Welcome'
import LOGO from '../public/assests/logo.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" className="w-10 h-10" href="/assests/logo2.png" />
        <title>DEVELOPER | DESIGNER</title>
      </Head>
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
        {/* Sidebar */}
        <SideBar />
        {/* Welcome content */}
        <Welcome />
        {/* Loader */}
        {/* About */}
        {/* Work */}
        {/* Contact */}
        {/*  */}
      </div>
    </div>
  )
}
