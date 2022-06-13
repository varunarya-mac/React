import styles from "./PopUp.module.css";
import Card from "./Card";
import Button from "./Button";

const Popup = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>Error:</h2>
      </header>
      <div className={styles.content}>
        <p>{props.content}</p>
      </div>
      <footer className={styles.actions}>
        <Button  title="Ok" action={props.handleClose}></Button>
      </footer>
    </Card>

    // <div className={styles.popup}>
    //   <div className={styles.box_}>
    //     <span className={styles.close_icon} onClick={props.handleClose}>x</span>
    //     {props.content}
    //   </div>
    // </div>
  );
};

export default Popup;
