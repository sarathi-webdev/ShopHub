import React from 'react'
import '../HomePage/Home.css'
import { getProducts } from '../../data/product' 

const Cart = () => {

    const productdata = getProducts();
    
  return (
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
                  <button className='view'>View Details</button>
                  <button className='addtocart'>Add to Cart</button>
                  </div>
               

              </div>
          ))}

        </div>
  )
}

export default Cart