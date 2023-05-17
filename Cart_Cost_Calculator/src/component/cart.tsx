import './cart.module.css'
import {CartInfo} from '../model/cart'

export function Cart(props: any): JSX.Element {

    const cartProducts = props.items as Array<any>;

    const subtotal = cartProducts.reduce((accumlator, currentvalue, index )=> {
            return accumlator + (currentvalue.product.price * currentvalue.qty)
    }, 0);

    function increaseQuantity(item: CartInfo) {
        props.dispatch({
            type: "INCREASE_QTY",
            payload: item.product.id,
          })
    }

    function decreaseQuantity(item: CartInfo) {
        props.dispatch({
            type: "DECREASE_QTY",
            payload: item.product.id,
          })
    }


    return (<div className='cart'>
        <h2>Cart Items</h2>
        <p><strong>Subtotal: ${subtotal}</strong></p>
        <div className='cart__items'>
            {cartProducts && cartProducts.map((item: CartInfo)=> {
                return (
                    <div key={item.product.id}>
                        <img src={item.product.thumbnail} alt={item.product.title}/>
                        <span>{item.product.title}</span>
                        <span>${item.product.price}</span>
                        <button onClick={(e)=> decreaseQuantity(item)}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={(e)=> increaseQuantity(item)}>+</button>
                    </div>
                )
            })}
        </div>


    </div>);
}