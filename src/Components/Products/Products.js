import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../redux/product-actions/ProductActions';

function Products() {
    const products = useSelector((state)=>state.productsData.products)
    console.log(products)
    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])

  return (
    <div>
        <h2>Products</h2>
        <div className="container">
            <div className='row'>
                {products.length>0 ? (
                   products.map((product)=>(
                    <div className='col-md-3'>
                        <Link to={`/product/${product.id}`}>
                        <div className='card'>
                        <img src={product.image} class="card-img-top" alt={product.category} />
                        <div className='card-body'>
                            <h3 className='card-title'>{product.category}</h3>
                            <h6>{product.title}</h6>
                        </div>
                        </div>
                        </Link>
                    </div>
                   )) 
                ):<p>loading...</p>}
            </div>
        </div>
    </div>
  )
}

export default Products