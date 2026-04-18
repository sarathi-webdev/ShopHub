import React from 'react'
import './Auth.css'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../../firebase'
import { login, selectUser, userSlice } from '../../../features/userSlice'


const Auth = () => {
  
  const[mode,setMode]=useState("signup")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState()

  const userInfo = useSelector(selectUser);

  const dispatch = useDispatch();
   
    
 const loginUser  = (e)=>{
      e.preventDefault();
   
      signInWithEmailAndPassword(auth,email,password).then((authUser)=>{
        console.log(authUser)
        dispatch(login(authUser.user))
       

       }).catch((err)=>{
        console.log(err.message)
       })
      

   
    }
    
  const signUp = (e) => {
      e.preventDefault();
     
      createUserWithEmailAndPassword(auth,email,password).then((authUser)=>{
        console.log(authUser)
         
      }).catch((err)=>{
        console.log(err.message);
      })
  }
      

    

    



  return (
    <div className='auth'>
      <div className='form' >
        <h2>{mode == "signup" ? "Sign up" : "Login"}</h2>
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
       {mode == "signup" ? (<div>
        <button type="submit" className='form-login' onClick={signUp} >Sign Up</button>
      </div>)
      :(<div>
        <button type="submit" className='form-login' onClick={loginUser} >Login</button>
      </div>)}
      
      </form>
        

      {mode == "signup" ? (<p>Don't Have an Account? <span onClick={()=>setMode("login")}>Sign Up</span></p>)
      :(<p>Already Have an Account? <span onClick={()=>setMode("signup")}>Login</span></p>)}
        
        
        


      </div>
      
    </div>
  )
}

export default Auth