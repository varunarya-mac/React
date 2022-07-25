import styles from "./Cart.module.css";
import Modal from "../shared/Modal";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/Cart-Context";
import CartItem from "./Cart-Item";
import OrderDetail from "./Order-detail";

const Cart = (props) => {
  const [showUserForm, setUserFormState] = useState(false);
  const cartCtx = useContext(CartContext);

  useEffect(()=>{
    if(cartCtx.items.length === 0) {
      setUserFormState(false);
    }
  }, [cartCtx.items]);


  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
    
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const userDetailForm = () => {
    if(cartCtx.items.length > 0) {
      setUserFormState(true);    }
    

  }
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
        <button hidden={showUserForm}   onClick={props.onClose} className={styles["button--alt"]}>
          Close
        </button>
        <button  hidden={showUserForm}  onClick={userDetailForm} className={styles.button}>Order</button>
        {showUserForm && <OrderDetail></OrderDetail> }
      </div>
    </Modal>
  );
};

export default Cart;
