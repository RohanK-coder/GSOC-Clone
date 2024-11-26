import React from 'react'
import Navbar from '../components/Navbar'
import TextComponent1 from '../components/TextComponent1'
import OrganizationComponent from '../components/OrganizationComponent'
import ContributorComponent from '../components/ContributorComponent'
export default function Home() {
  return (
    <div>
      <div className='flex items-center justify-center p-2'>
        <img src="https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-Horizontal.png" alt="" width={500}/>
      </div>
      <Navbar/>
      <TextComponent1/>
      <OrganizationComponent/>
      <ContributorComponent/>

    </div>
  )
}
