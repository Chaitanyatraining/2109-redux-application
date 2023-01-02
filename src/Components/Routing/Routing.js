import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../cart/Cart'
import Product from '../Products/Product'
import Products from '../Products/Products'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  )
}

export default Routing