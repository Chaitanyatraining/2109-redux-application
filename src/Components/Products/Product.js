import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux';
import { addToCart } from '../../redux/product-actions/ProductActions';

function Product() {
    const {id} = useParams();
    const [product,setProduct] = useState({})
    const dispatch = useDispatch();
    const [isProductAdded,setIsProductAdded] = useState(false);

    useEffect(()=>{
        getProductData();
    },[])

    const getProductData = async()=>{
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
        console.log(data)
    }

  return (
    <div>
        <h2>Product Details page</h2>
        {
            Object.keys(product).length ? (
                <div className='container'>
                <div className='row border border-secondary'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={product.image} alt={product.category} />
                    </div>
                    <div className='col-md-6 border border-secondary'>
                            <h2 className='mt-4'>{product.title}</h2>
                            <div className='product_price'>
                        <span className='bg-info text-light p-2'>Price: ${product.price}</span>
                    </div>
                    <div className='product_category mt-3'>
                        <span className='bg-secondary text-white p-2 '>category: ${product.category}</span>
                    </div>
                    <div className='product_description mt-3'>
                        <span className=' p-2 '><strong>description:</strong> {product.description}</span>
                    </div>
                    <div className='product_addtocart mt-3'>
                        <button className='btn btn-info' 
                        onClick={()=>{
                            dispatch(addToCart(product))
                            setIsProductAdded(true)
                        }
                            }>{isProductAdded ? "added" : "add to cart"}</button>
                    </div>
                    </div>
                </div>
                </div>
            ):<p>loading...</p>
        }
    </div>
  )
}

export default Product 