import { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={styles.backdrop}></div>;
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
      {ReactDom.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
