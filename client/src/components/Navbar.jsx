import React from 'react'

export default function Navbar() {
    const navItems = [{name:"Home",href:"/"},{name:"Organization",href:"/orgpage"},{name:"Contributor",href:"/conpage"}];
  return (
    <div className='navbar'>
      <ul className='flex align-center justify-center gap-20 '>
      {navItems.map((item)=>{
        return <li key={item.name}><a href={item.href}>{item.name}</a></li>
        
        })}
      </ul>
    </div>
  )
}
