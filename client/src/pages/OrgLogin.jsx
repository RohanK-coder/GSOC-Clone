import React from 'react'
import { useState } from 'react'
export default function OrgLogin() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const handleSubmitLogin = (e)=>{
    e.preventDefault();
    
    console.log("submitted form with username and password")
    setUsername("");
    setPassword("");
  }
  const handleSubmitSignup = (e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <h1>Organization Login Page</h1>
      <h1>Login</h1>
      <form onSubmit={handleSubmitLogin}>
        <input type="text" placeholder='username'  className='p-3 rounded-md m-4 border-2' 
        value={username} 
        onChange={(e)=>{
          setUsername(e.target.value)
          
          console.log(username)
        }}/> <br />
        <input type="password" placeholder='password' className='p-3 rounded-md m-4 border-2' 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
        />
        <button type='submit' className='p-3 rounded-md m-4 border-4'>Submit</button>
      </form>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmitSignup}>
        <input type="text" placeholder='username'  className='p-3 rounded-md m-4 border-2' 
        value={username} 
        onChange={(e)=>{
          setUsername(e.target.value)
          
          console.log(username)
        }}/> <br />
        <input type="password" placeholder='password' className='p-3 rounded-md m-4 border-2' 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
        />
        <button type='submit' className='p-3 rounded-md m-4 border-4'>Submit</button>
      </form>
    </div>
  )
}
