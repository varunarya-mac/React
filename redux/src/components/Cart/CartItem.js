import classes from './CartItem.module.css';
import { addItem, removeItem } from '../../redux_store/action/cartItemSlice'
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const {title, price, quantity, id} = props.item;
  const total = price*quantity;
  
  const dispatch = useDispatch();

  const removeItemInCart = () => {
    dispatch(removeItem(props.item.id));
  }
  
  const addItemInCart = () => {

    dispatch(addItem(props));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemInCart}>-</button>
          <button onClick={addItemInCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
