import { CartObject, CartAction } from "../model/cart"

export const cartReducer = (state: CartObject, action: CartAction) => {

    switch(action.type) {
        case 'ADD_TO_CART': {
            const index = state.cart.findIndex((item)=> item.product.id === action.payload.id);

            if( index >= 0 ) {
                state.cart[index].qty += 1; 
                return {
                    ...state
                  }
            }
            else {
                return {...state, cart: [...state.cart, {product: action.payload, qty: 1 } ]}
            }
            
        }
        case 'INCREASE_QTY': {
            return {
                ...state,
                cart: state.cart.filter((c) =>
                  c.product.id === action.payload ? (c.qty = c.qty + 1 ) : c.qty
                ),
              };
        }
        case 'DECREASE_QTY': {
                return {
                    ...state,
                    cart: state.cart.filter((c) =>
                      c.product.id === action.payload ? (c.qty = c.qty - 1 ) : c.qty
                    ),
                  };
        }
        default: {
            return {...state};
        }
    }
}