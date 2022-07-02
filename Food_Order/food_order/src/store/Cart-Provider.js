import CartContext from "./Cart-Context";
import { useReducer } from "react";

const initialValues = {
    items: [],
    amount: 0
}

const reducerFn = (preState, action) => {

    switch (action.type) {
        case 'ADD': 
        {
            const updatedItems = preState.items.concat(action.item);
            const updatedAmount = preState.amount + (action.item.price * action.amount);
            return { items: updatedItems, amount: updatedAmount};
        
        }
        case 'REMOVE':

        break;
        default:
            return preState;
    }
    
}

const CartProvider = (props) => {
  const [cartCtx, updateCtxValues]= useReducer(reducerFn, initialValues);

  function addItemInCart(item) {
    updateCtxValues({type:'ADD', item});
  }

  function removeItemInCart(item) {
    updateCtxValues({type:'REMOVE',item});
  }

  const ctx = {
    items: cartCtx.items,
    amount: cartCtx.amount,
    addItem: addItemInCart,
    removeItem: removeItemInCart,
  };


    return (
    <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
