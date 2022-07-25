import styles from './App.module.css';
import {useState} from 'react'
import Header from './component/header/Header'
import Meals from './component/meal-list/Meals'
import Cart from './component/cart-popup/Cart' 
import CartProvider from './store/Cart-Provider';
function App() {

  const [showModalUI, setShowModalState] = useState(false);

  function showModal() {
    setShowModalState(true);
  }

  function hideModal() {
    setShowModalState(false);
  }

  return (
    <CartProvider>
      {showModalUI && <Cart onClose={hideModal}> </Cart>}
        <Header showModal={showModal}></Header>
        <main>
          <Meals></Meals>
        </main>
    </CartProvider>
  );
}
// https://react-food-order-157be-default-rtdb.europe-west1.firebasedatabase.app/order.json
export default App;
