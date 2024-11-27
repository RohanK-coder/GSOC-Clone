import React from 'react'
import { Link } from 'react-router-dom'
export default function ConLogin() {
  return (
    <div>
      <h1>helllo</h1>
      <button><Link to={"/conprofile"}>Go to profile</Link></button>
    </div>
  )
}
