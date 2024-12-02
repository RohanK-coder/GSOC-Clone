import React from 'react'
import { Link } from 'react-router-dom'
export default function OrgPage() {
  return (
    <div>
      <h1>orgainization page</h1>
      <button className='border-4 bg-black text-white'><Link to={'/orgregister'}>Org Login</Link></button>
    </div>
  )
}
