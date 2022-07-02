import styles from "./Header.module.css";
import { Fragment } from "react";
import mealimage from '../../assets/meals.jpeg'
import CartButton from './Cart-Button'

const Header = (props) => {

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Meal List</h1>
        <CartButton onClick={props.showModal}> </CartButton>
      </header>
      <div className={styles['main-image']}>
        <img  className={styles.img} src={mealimage}/>
      </div>
    </Fragment>
  );
};

export default Header;
