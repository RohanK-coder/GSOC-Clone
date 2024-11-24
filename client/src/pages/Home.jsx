import React from 'react'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div>
      <div className='flex items-center justify-center p-2'>
        <img src="https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-Horizontal.png" alt="" width={500}/>
      </div>
      <Navbar/>
    </div>
  )
}
