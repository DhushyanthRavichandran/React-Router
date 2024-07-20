import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
   const  navigate=useNavigate()
    function onHandleClick(){
        navigate('/dasboard');  
    }
  return (

    <div>
        <button onClick={onHandleClick}>click</button>
    </div>
  )
}

export default Login