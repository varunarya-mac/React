import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const Cart = (props) => {
  const itemSelector = useSelector((state) => state.cartItems);
  const showCartSelector = useSelector((state) => state.showCart);

  return (
    <Fragment>
      {showCartSelector.showCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {itemSelector.items.map((item) => (
              <CartItem
                item={{
                  title: item.itemName,
                  quantity: item.itemQuantity,
                  price: item.price,
                  id: item.itemId,
                }}
              />
            ))}
          </ul>
        </Card>
      )}
    </Fragment>
  );
};

export default Cart;
