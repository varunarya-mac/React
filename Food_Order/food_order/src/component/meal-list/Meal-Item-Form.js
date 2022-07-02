import styles from "./Meal-Item-Form.module.css";
import { useRef } from "react";

const Form = (props) => {
  const inputref = useRef();

  function updateCart(event) {
    event.preventDefault();
    const amount = Number(inputref.current.value);
    props.updateCart(amount);

  }

  return (
    <form className={styles.form} onSubmit={updateCart}>
      <label htmlFor={props.id}>Amount</label>
      <input
        ref={inputref}
        id={props.id}
        type="number"
        step="1"
        defaultValue="1"
        min="1"
        max="5"
      />
      <button type="submit"> + Add </button>
    </form>
  );
};

export default Form;
