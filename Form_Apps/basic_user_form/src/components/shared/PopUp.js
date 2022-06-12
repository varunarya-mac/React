 import styles from './PopUp.module.css'
 
 const Popup = props => {
  return (
    <div className={styles.popup}>
      <div className={styles.box_}>
        <span className={styles.close_icon} onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;