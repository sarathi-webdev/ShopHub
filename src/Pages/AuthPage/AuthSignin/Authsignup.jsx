import React from 'react'
import '../Authlogin/Auth.css'

const Authsignup = () => {
  return (
    <div className='auth'>
      <div className='form' >
        <h2>Sign Up</h2>
        <form className='form-input'>
          <h4>Email</h4>
          <input type="email" placeholder='Enter a Email...' 
            
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            />
            
         
          <h4>Password</h4>
          <input
           type="password" 
           placeholder='Enter a Password...'
           
         onChange={(e)=>setPassword(e.target.value)}
         value={password}
      ></input>
      
      <div>
        <button type="submit" className='form-login' >Sign Up</button>
      </div>
      </form>
        

      
    
        
        <p>Already Have an Account <span >Sign Up</span></p>


      </div>
      
    </div>
  )
}

export default Authsignup