import styles from "./Cart.module.css";
import Modal from "../shared/Modal";
import { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import CartItem from "./Cart-Item";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const items = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((obj) => (
        <CartItem
          key={obj.id}
          name={obj.name}
          price={obj.price}
          amount={obj.amount}
          onRemove={cartItemRemoveHandler.bind(null, obj.id)}
          onAdd={cartItemAddHandler.bind(null, obj)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClose}>
      {items}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$ {cartCtx.totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onClose} className={styles["button--alt"]}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
