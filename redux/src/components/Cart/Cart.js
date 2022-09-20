import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { Selector, useSelector } from 'react-redux';

const Cart = (props) => {

  const selector = useSelector((state)=> state);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>  
      {selector.items.map((item) => ( <CartItem
          item={{ title: item.itemName, quantity: item.itemQuantity, price: item.price, id: item.itemId }}
        />))}
      </ul>
    </Card>
  );
};

export default Cart;
