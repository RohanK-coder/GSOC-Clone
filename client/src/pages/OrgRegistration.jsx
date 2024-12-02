import React from 'react'
import { useState } from 'react';
export default function OrgRegistration() {
  
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [technologies,setTechnologies] = useState("");
  const [projects,setProjects] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    console.log(description)
  }
  return (
    <div className='reg-form'>
      <h1>Organization Registration</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' className='border-2 mt-2 mb-2 p-1 rounded-md'
        value={name}
        onChange={(e)=>{
          setName(e.target.value);
        }}
        /><br />

        <input type="textarea" placeholder='description' className='border-2  mt-2 mb-2  p-1 rounded-md h-26'
        value={description}
        onChange={(e)=>{
          setDescription(e.target.value)
        }}
        /><br />
        <label htmlFor="techused">Technologies used : </label><br />
        <select name="techUsed" id="" className='border-2  mt-2 mb-2 p-1 rounded-md'>
          <option value="react" defaultChecked>React</option>
          <option value="mongo">Mongo</option>
          <option value="express">Express</option>
          <option value="node">Node</option>
        </select>
        <button className='border-2 rounded-md pr-2 pl-2 bg-gray-800 text-white'>Add</button>
        <p>*selected*</p>
        <button className='border-2 rounded-md pr-2 pl-2 bg-gray-800 text-white mt-2'>Add Projects</button>
        <button type='submit'  className='border-2 rounded-md pr-2 pl-2 bg-gray-800 text-white' disabled={!name && !description} >Submit</button>
      </form>

    </div>
  )
}
