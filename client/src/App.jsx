
import React from 'react'
import Home from './pages/Home'
import OrgLogin from './pages/OrgLogin'
import OrgPage from './pages/OrgPage'
import OrgProfile from './pages/OrgProfile'
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import ConLogin from './pages/ConLogin'
import ConProfile from './pages/ConProfile'
import ConPage from './pages/ConPage'

export default function App() {
  return (
    <>
    <div className='flex items-center justify-center p-2'>
        <img src="https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-Horizontal.png" alt="" width={500}/>
      </div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/orgpage' element={<OrgPage/>}/>
      <Route path='/orglogin' element={<OrgLogin/>}/>
      <Route path='/orgprofile' element={<OrgProfile/>}/>
      <Route path='/conpage' element={<ConPage/>}/>
      <Route path='/conlogin' element={<ConLogin/>}/>
      <Route path='/conprofile' element={<ConProfile/>}/>
    </Routes>
    </>
  )
}
