import styles from "./Meal-Item.module.css";
import Form from "./Meal-Item-Form";
const MealItem = (props) => {
  const item = props.item;
  
  return (
    <li className={styles.meal}>
      <div>
        <h3>{item.name}</h3>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>$ {item.price}</p>
      </div>
      <div>
        <Form id={item.id}></Form>
      </div>
    </li>
  );
};

export default MealItem;
