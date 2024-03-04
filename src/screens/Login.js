import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const navigate = useNavigate();


  const handleAdmin=(e)=>{
    navigate(`/admin`)
  }

  const handleUser=(e)=>{
    navigate(`/user`)
  }
  return (
    <div>
      <button onClick={handleAdmin}>Admin</button>
      <button onClick={handleUser}>User</button>
    </div>
  )
}
