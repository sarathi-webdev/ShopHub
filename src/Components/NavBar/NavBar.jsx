import React, { useState } from 'react'
import AuthLogin from '../../Pages/AuthPage/Authlogin/Auth'
import Authsignup from '../../Pages/AuthPage/AuthSignin/Authsignup'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { logout } from '../../features/userSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const NavBar = () => {

 const user = useSelector(selectUser)

 const dispatch = useDispatch()

 const handleLogout = async () => {
  try{
    await signOut(auth);
    dispatch(logout(user));
  } catch(error) {
    console.log(error)
  }
    
 }

  

 
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-brand'>
          <Link to={"/"} className='brand'>
            <h1>ShopHub</h1>
          </Link>
        </div>
      <div className='nav'>
        <Link className='routes' to={'/'}>
        <p>Home</p>
        </Link>
        
        <Link className='routes' to={'/cart'}>
        <p>Cart</p>
        </Link>
        
      </div>
      {!user ? ( <div className='login-btn'>
        <button className='login'>Login</button>
        <button className='signin'>Signup</button>
      </div>)
      :(<button className='login' onClick={handleLogout}>Logout</button>)}
     
      </div>
      
    </nav>
  )
}

export default NavBar