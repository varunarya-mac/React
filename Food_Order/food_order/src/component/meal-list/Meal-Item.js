import styles from "./Meal-Item.module.css";
import Form from "./Meal-Item-Form";
import CartContext from "../../store/Cart-Context";
import { useContext } from "react";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  function updateCart(itemAmount) {
    console.log('----------------',itemAmount, props.item);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: itemAmount
    })

  }

  const item = props.item;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{item.name}</h3>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>$ {item.price}</p>
      </div>
      <div>
        <Form updateCart={updateCart} id={item.id}></Form>
      </div>
    </li>
  );
};

export default MealItem;
