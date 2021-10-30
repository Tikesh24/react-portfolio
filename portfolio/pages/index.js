import Head from 'next/head'
import SideBar from '../components/Sidebar/SideBar'
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import ListComponent from '../components/Sidebar/ListComponent';
import { server } from '../config';
import { createContext } from 'react';
export const AppContext = createContext();

export default function Home({ data }) {

  const { welcome, user, skills, work, about } = data;

  const [component, setComponent] = useState("Welcome");

  return (
    <div>
      <AppContext.Provider value={{ welcome, user, skills, work, about }}>
        <Head>
          <link rel="icon" className="w-10 h-10" href="/assests/logo2.png" />
          <title>DEVELOPER | DESIGNER</title>
        </Head>

        <div className="md:flex flex-col md:flex-row min-h-screen w-full relative">
          <SideBar setComponent={setComponent} />

          {/* <!-- content --> */}
          <div className="contentWrapper min-h-full md:pl-64 flex-1 w-full justify-end">
            <ListComponent component={component} />
          </div>
        </div>
      </AppContext.Provider>
    </div>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch(`${server}/api/docs/getdata`)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}