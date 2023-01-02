import { ACTION_TYPE } from "../types/ActionTypes";

export const addToCart = (product) =>{
    return {type:ACTION_TYPE.ADD_TO_CART, payload:product};
}

export const removeFromCart = (id) =>{
    return{
        type : ACTION_TYPE.REMOVE_FROM_CART,
        payload : id,
    }
}

// sync action creators
// async action creators
export const fetchProducts = async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    // setProducts(data);

    return {
        type:ACTION_TYPE.FETCH_PRODUCTS,
        payload:data
    }
}