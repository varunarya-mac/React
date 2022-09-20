import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { showCartUI } from '../../redux_store/action/showCartSlice'

const CartButton = (props) => {
  const selector = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(showCartUI());
  }

  return (
    <button onClick={showCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{selector.totalCount}</span>
    </button>
  );
};

export default CartButton;
