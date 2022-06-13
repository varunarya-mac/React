import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button  onClick={props.action}  type={props.type || 'button'} className={styles.btn}>{props.title}</button>
    );
}

export default Button;