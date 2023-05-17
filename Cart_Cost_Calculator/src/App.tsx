import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import { Product } from './component/products';
import {Cart} from './component/cart'
import {ResponseObject} from './model/product'
import {CartObject} from './model/cart'
import { cartReducer } from './reducer/cart-reducer';


function App() {

  const [products, setProducts] = useState<ResponseObject[]>([]);
  const obj: CartObject = {cart: []};
  const [cart, dispatch] = useReducer(cartReducer,obj);

  useEffect(()=> {

     const getData = async () => {
       const resp =  await fetch('https://dummyjson.com/products');
       const products = await resp.json();
       setProducts(products.products); 
     }

     getData();

  }, [])

  return (
   <div className='container'>
    <div className='container__product'>
    {products && products.map((obj: ResponseObject)=>  <Product dispatch={dispatch}  key={obj.id} product={obj} ></Product>) }
    </div>

    <div className='container__cart'>
     <Cart dispatch={dispatch}  items={cart.cart}></Cart>
    </div>
    
    
   </div>
  );
}

export default App;
