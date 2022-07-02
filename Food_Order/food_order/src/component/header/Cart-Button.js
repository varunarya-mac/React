import styles from "./Cart-Button.module.css";
import Icon from "./Cart-Icon";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/Cart-Context";

const CartButton = (props) => {
  const [btnHighlighted, setBtnHighlightState] = useState(false);
  const cartContext = useContext(CartContext);
  const numberOfItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnclasses = `${styles.button} ${btnHighlighted ? styles.bump : ""}`;
  const { items } = cartContext;
  useEffect(() => {
    setBtnHighlightState(true);
    const timer = setTimeout(() => {
      setBtnHighlightState(false);
    }, 310);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={props.onClick} className={btnclasses}>
      <span className={styles.icon}>
        <Icon></Icon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
