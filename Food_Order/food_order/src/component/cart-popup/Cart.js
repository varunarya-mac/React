import styles from "./Cart.module.css";
import Modal from '../shared/Modal'
import { useContext } from "react";

const Cart = (props) => {
  
  
    const items = (<ul className={styles['cart-items']}>
      {[{id: '1', name: 'sushi', price: 23, amount: 2}].map((obj) => (
         <li key={obj.id}>{obj.name}</li>
      ))}
    </ul>);

  return (
    <Modal onClick={props.onClose}>
       
        {items}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>$39</span>
        </div>
        <div className={styles.actions}>
        <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
  
    </Modal>
    
  );
};


export default Cart;
