import React from 'react'
import {Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Pages/HomePage/Home'
import Auth from './Pages/AuthPage/Authlogin/Auth'
import CheckOut from './Pages/CheckoutPage/CheckOut'
import NavBar from './Components/NavBar/NavBar'
import { useSelector , useDispatch } from 'react-redux'
import { selectUser,login,logout } from './features/userSlice'
import {auth} from './firebase'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import Cart from './Pages/Cart/Cart'
import ProductDetail from './Pages/ProductDetail/ProductDetail'

const App = () => {

   const user = useSelector(selectUser);


     const dispatch = useDispatch()
   
     useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(user) => {
         if(user){
           dispatch(login({
             uid:user.uid,
             email:user.email,
            
           }))
         }
         else{
           dispatch(logout)
         }
       });
       return unsubscribe;
     },[])

  return (
    <div className='app'>
      {!user ? (
       <Auth />
      )
    :(
      <
      >
       <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<CheckOut />}/>
      <Route path='/cart' element={<Cart />} />
      <Route path='/products/:id' element={<ProductDetail />} />
    </Routes>
    </>
      
    )}

     
    </div>
    
  )
}

export default App
