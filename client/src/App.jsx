
import React from 'react'
import Home from './pages/Home'
import OrgLogin from './pages/OrgLogin'
import OrgPage from './pages/OrgPage'
import OrgProfile from './pages/OrgProfile'
import {Route,Routes} from "react-router-dom"
export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/orgpage' element={<OrgPage/>}/>
      <Route path='/orglogin' element={<OrgLogin/>}/>
      <Route path='/orgprofile' element={<OrgProfile/>}/>
    </Routes>
    </>
  )
}
