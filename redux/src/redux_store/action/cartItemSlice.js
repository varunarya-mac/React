import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    totalCount: 0,
    items: []
};
const cartSlice = createSlice({
    name: 'cartItem',
    initialState,

    reducers: {
        addItem (state, action) {
            const itemFound = state.items.findIndex((item) => item.itemId === action.payload.id);
            if(itemFound >= 0) {
                state.items[itemFound].itemQuantity++;
            }
            else {
                state.items.push({
                    itemId: action.payload.id, 
                    itemName: action.payload.title, 
                    itemQuantity: 1, 
                    price: action.payload.price
                })
            }
            state.totalCount++;
        },

        removeItem(state, action) {
            console.log('----------',action.payload);
            const itemFound = state.items.findIndex((item) => item.itemId === action.payload);
            console.log('itemFound----------',itemFound);

            if(state.items[itemFound].itemQuantity === 1) {
                state.items.splice(itemFound, 1);
            }
            else {
                state.items[itemFound].itemQuantity--;
            }
            state.totalCount--;
            
        } 
    }

    });

export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
