import styles from './Cart-Button.module.css'
import Icon from './Cart-Icon'
import { useContext } from 'react';
import CartContext from '../../store/Cart-Context';

const CartButton = (props) => {
    const cartContext = useContext(CartContext);

    const numberOfItems = cartContext.items.reduce((currentNumber, item) => { 
        return currentNumber + item.amount;
    }, 0);

    return (
        <button onClick={props.onClick} className={styles.button}>
            <span className={styles.icon}>
                <Icon></Icon>
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}>{numberOfItems}</span>
            
        </button>
    );
}

export default CartButton;