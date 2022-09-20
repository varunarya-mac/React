import { configureStore } from '@reduxjs/toolkit';
import cartReducers from '../redux_store/action/cartItemSlice'

const store = configureStore( {
    reducer: cartReducers
});

export default store;