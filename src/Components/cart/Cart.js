import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/product-actions/ProductActions';

function Cart() {
  const dispatch = useDispatch();
    // const [total,setTotal] = useState(0);
    const cart_data = useSelector((state)=>state.productsData.cartData);
    // console.log(cart_data);
  const totalPrice = cart_data.reduce((prevsValue,currentValue)=>{
      return prevsValue + currentValue.price
    },0)
  return (
    <div>
        <h2>Cart Page</h2>
         { cart_data && cart_data.length  && (
            <div className='product_total'>
            <p className='mt-2'>Total Price: {totalPrice}</p>
        </div>
         )}
      
        <div className='container mt-2 border border-dark'>
            {
                cart_data && cart_data.length ? (
                    cart_data.map((product)=>(
                        <div className='row mt-3'>
                            <div className='col-md-4'>
                                <img src={product.image} alt={product.category} className="img-fluid" />
                            </div>
                            <div className='col-md-6'>
                              <div>
                                <h2>Title:{product.title}</h2>
                              </div>
                              <div>
                                <p>category:{product.category}</p>
                              </div>
                              <div>
                                <p>price:${product.price}</p>
                              </div>
                            </div>
                            <div className='col-md-2'>
                            <button className='btn btn-danger'
                             onClick={()=>{dispatch(removeFromCart(product.id))}}>Remove</button>
                            </div>
                        </div>
                    ))
                ):<p>no data found</p>
            }
        </div>
    </div>
  )
}

export default Cart