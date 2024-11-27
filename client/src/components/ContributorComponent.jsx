import React from 'react'
import { Link } from 'react-router-dom'
export default function ContributorComponent() {
  return (
    <div>
      <h1>How to apply as contributor ? </h1>
      <p>Some text</p>
      <button className='border-2 rounded-md bg-black text-white'><Link to={"/conpage"}>con page</Link></button>
    </div>
  )
}
