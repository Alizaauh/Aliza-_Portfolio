import React from 'react'
import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail,password, setPassword] = useState();
    const navigate=useNavigate();
    const handleSubmit=() => {
      alert(`submitted: ${email}`)
      navigate("/")

    }

  return (

  <div className="login-container"  onSubmit={handleSubmit}>
    <form className="form">
        <h2>Login</h2>
        <div className='email'>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                     onChange={(e) =>{setEmail(e.target.value)}}/>
                        
</div>
        <div className="password">
          <label htmlFor="Password"> Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        <button type="submit">LogIn</button>
        

    </form>
  </div>
  )
  

}

export default Login
