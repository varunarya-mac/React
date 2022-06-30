import { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
   return (
  <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div> );
};

const portalElement = document.getElementById("popup");

const Modal = (props) => {
  
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
