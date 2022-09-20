import { configureStore } from '@reduxjs/toolkit';
import cartReducers from '../redux_store/action/cartItemSlice'
import showCartReducers from '../redux_store/action/showCartSlice'
const store = configureStore( {
    reducer: { 
        cartItems: cartReducers,
        showCart: showCartReducers 
    }
});

export default store;