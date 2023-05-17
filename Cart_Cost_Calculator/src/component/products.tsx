import { ResponseObject } from "../model/product";
import styles from "./product.module.css";
import { CartAction } from "../model/cart";

export interface Product_Props {
  product: ResponseObject;
  dispatch: (obj: CartAction) => void;
}

export function Product(props: Product_Props): JSX.Element {
  function addProduct() {
    const obj: ResponseObject = {
      id: props.product.id,
      title: props.product.title,
      price: props.product.price,
      thumbnail: props.product.thumbnail,
    };

    props.dispatch({
      type: "ADD_TO_CART",
      payload: obj,
    });
  }

  return (
    <div className={styles.product}>
      <figure>
        <img src={props.product.thumbnail} alt={props.product.title} />
        <figcaption>
          <p>{props.product.title}</p>
          <span>${props.product.price}</span>{" "}
        </figcaption>
      </figure>

      <button onClick={addProduct} className={styles.btn}>
        Add to Cart
      </button>
    </div>
  );
}
