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

export default App;
