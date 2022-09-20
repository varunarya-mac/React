import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const [items, getItemsList] = useState([]); 

  const fetchList = async () => {
  try {
    const response = await fetch('http://localhost:8080/items', {mode:'cors'});
    const data = await response.json();
    getItemsList(data);
  }
  catch (e) {
    console.log(e)
  }
}
useEffect(() => {
  fetchList();
}, [])

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
    {items.map((data) => (
     <ProductItem
     id={data.id}
     title={data.title}
     price={data.price}
     description={data.description}
   />
    ))}
      </ul>
    </section>
  );
};

export default Products;
