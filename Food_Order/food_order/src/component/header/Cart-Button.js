import styles from './Cart-Button.module.css'
import Icon from './Cart-Icon'

const CartButton = (props) => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <Icon></Icon>
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}> 3</span>
            
        </button>
    );
}

export default CartButton;