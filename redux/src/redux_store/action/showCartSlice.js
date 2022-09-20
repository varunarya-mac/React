import { createSlice } from '@reduxjs/toolkit'

const initialState = {showCart : false};

const cartSlice = createSlice({
    name: 'showCart',
    initialState,

    reducers: {
        showCartUI(state) {
            state.showCart = !state.showCart;
        }
    }
});

export const { showCartUI } = cartSlice.actions;

export default cartSlice.reducer;