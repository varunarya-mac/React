import styles from "./Meals.module.css";
import Card from "../shared/Card";
import MealItem from "./Meal-Item";
import Data from "../../assets/data.json";
import { Fragment } from "react";

const Meals = (props) => {
  const list = Data.map((obj) => {
    return <MealItem key={obj.id} item={obj} />;
  });

  return (
    <Fragment>
      <section className={styles.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section >
    <section className={styles.meals}>

      <Card>
        <ul> {list}</ul>
        </Card>
    </section>
        
    </Fragment>
  );
};

export default Meals;
