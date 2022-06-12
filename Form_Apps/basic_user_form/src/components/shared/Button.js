import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button type={props.type} className={styles.btn}>{props.title}</button>
    );
}

export default Button;