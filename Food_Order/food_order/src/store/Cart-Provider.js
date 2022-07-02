import CartContext from "./Cart-Context";
import { useReducer } from "react";

const initialValues = {
    items: [],
    totalAmount: 0
}

const reducerFn = (preState, action) => {

    switch (action.type) {
        case 'ADD': 
        {
         

          const itemIndex = preState.items.findIndex(item => item.id === action.item.id);
          const updatedAmount = +((preState.totalAmount + (action.item.price * action.item.amount)).toFixed(2));
          let updatedItems;
          if(itemIndex !== -1)
          {
            const existingItem = preState.items[itemIndex];
            const newItem = {...existingItem, amount: existingItem.amount + action.item.amount}
            updatedItems = [...preState.items];
            updatedItems[itemIndex] = newItem; 
          }
          else {
             updatedItems = preState.items.concat(action.item);
          }
          return { items: updatedItems, totalAmount: updatedAmount};
        
        }
        case 'REMOVE': {

          const itemIndex = preState.items.findIndex(item => item.id === action.id);
          
          const existingItem = preState.items[itemIndex];
          const updatedAmount = +((preState.totalAmount  - existingItem.price).toFixed(2));
          let updatedItems;
          if(itemIndex === -1)
          {
            return { items: updatedItems, totalAmount: updatedAmount};
          }
          else {
              if(existingItem.amount === 1) {
                updatedItems = preState.items.filter((item)=> item.id !== action.id);
              }
              else {
                
                const newItem = {...existingItem, amount: existingItem.amount - 1}
                updatedItems = [...preState.items];
                updatedItems[itemIndex] = newItem;
              }

          }
          return { items: updatedItems, totalAmount: updatedAmount};

        }

        default:
            return preState;
    }
    
}

const CartProvider = (props) => {
  const [cartCtx, updateCtxValues]= useReducer(reducerFn, initialValues);

  function addItemInCart(item) {
    updateCtxValues({type:'ADD', item});
  }

  function removeItemInCart(id) {
    updateCtxValues({type:'REMOVE',id});
  }

  const ctx = {
    items: cartCtx.items,
    totalAmount: cartCtx.totalAmount,
    addItem: addItemInCart,
    removeItem: removeItemInCart,
  };


    return (
    <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
