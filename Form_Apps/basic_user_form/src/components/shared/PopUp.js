import styles from "./PopUp.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from 'react-dom'
import { Fragment } from "react";

const PopupUI = (props) => {return <Card className={styles.modal}>
  <header className={styles.header}>
    <h2>Error:</h2>
  </header>
  <div className={styles.content}>
    <p>{props.content}</p>
  </div>
  <footer className={styles.actions}>
    <Button  title="Ok" action={props.handleClose}></Button>
  </footer>
</Card>;
}


const Popup = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<PopupUI handleClose={props.handleClose} />, document.getElementById('popup'))}
    </Fragment>
    
  );
};

export default Popup;
