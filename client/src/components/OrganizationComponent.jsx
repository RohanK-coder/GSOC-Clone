import React from 'react'
import { Link } from 'react-router-dom'

export default function OrganizationComponent() {
  return (
    <div>
      <h1>How to apply as organization ? </h1>
      <p>Some Text ................</p>
      <button className='border-2 rounded-md bg-black text-white'><Link to={'/orgpage'}>org page</Link></button>
    </div>
  )
}
