import React, { useEffect, useState } from 'react'
import "./Home.css"
import { getProducts } from '../../data/product' 

import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { login, logout, selectUser } from '../../features/userSlice'
import Auth from '../AuthPage/Authlogin/Auth'
import { useNavigate,Link } from 'react-router-dom'



const Home = () => {

  const navigate = useNavigate()


  const productdata = getProducts();

  return (

  
      <div className='Home'>
      <div className='Homeintro'>
        <h1>Welcome to ShopHub</h1>
        <p>Discover amazing products at great prices</p>
      </div>
      <div className='Productslist'>
        <h2>Our Products</h2>
        <div className='products'>
          {productdata.map((product)=>(
            <div className='eachproduct' key={product.id}>
              <div className='productimg'> 
              <img className="img" src={product.image} alt={product.name}/>
              </div>
              <div className='productdetail'>
                <h3>{product.name}</h3>
                <h4>₹{product.price}</h4>

                </div>
             
                 <div className='productbtn'>
                  <Link className='product-view' to={`/products/${product.id}`}>
                   <button className='view'>View Details</button>
                   </Link>
                 
                  <button className='addtocart'>Add to Cart</button>
                  </div>
               

              </div>
          ))}

        </div>

      </div>
    </div>
    
   
    
  )
}


export default Home