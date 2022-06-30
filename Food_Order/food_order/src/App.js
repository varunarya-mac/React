import styles from './App.module.css';
import {Fragment, useState} from 'react'
import Header from './component/header/Header'
import Meals from './component/meal-list/Meals'
import Cart from './component/cart-popup/Cart' 
function App() {

  const [showModal, setShowModalState] = useState(false);

  function showModal() {
    setShowModalState(true);
  }

  function hideModal() {
    setShowModalState(false);
  }

  return (
    <Fragment>
      {showModal && <Cart></Cart>}
        <Header></Header>
        <main>
          <Meals></Meals>
        </main>
    </Fragment>
  );
}

export default App;
