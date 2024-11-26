import React from 'react'
import { Link } from 'react-router-dom'
export default function OrgPage() {
  return (
    <div>
      <h1>orgainizatio page</h1>
      <button className='border-4 bg-black text-white'><Link to={'/orglogin'}>Org Login</Link></button>
    </div>
  )
}
