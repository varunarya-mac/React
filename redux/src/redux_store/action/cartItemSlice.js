import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    totalCount: 0,
    items: []
};

export const updateListOnServer = createAsyncThunk('cartItem/updateListOnServer' , async (item) => {
    const requestOptions ={
        method: 'POST'
    };
    const result = await fetch('http://localhost:8080/items', requestOptions);
    return result.json();
});


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
            const itemFound = state.items.findIndex((item) => item.itemId === action.payload);

            if(state.items[itemFound].itemQuantity === 1) {
                state.items.splice(itemFound, 1);
            }
            else {
                state.items[itemFound].itemQuantity--;
            }
            state.totalCount--;
            
        } 
    },
    extraReducers: {
        [updateListOnServer.fulfilled]: (state, action) => {
            console.log('-----success Asnyc Action-----',action.payload);
          },
        [updateListOnServer.rejected]: (state, action) => {
            console.log('------rejection Async Action----',action.payload);
          }
    }

    });

export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
