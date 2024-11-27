import React from 'react'
import { Link } from 'react-router-dom'
export default function ConPage() {
  return (
    <div>
      <h1>Contributor page</h1>
      <button className='border-4 text-white bg-black'><Link to={"/conlogin"}>Con Login</Link></button>
    </div>
  )
}
