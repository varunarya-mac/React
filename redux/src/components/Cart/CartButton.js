import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const selector = useSelector((state) => state);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{selector.totalCount}</span>
    </button>
  );
};

export default CartButton;
