import styles from './Meal-Item-Form.module.css'


const Form = (props) => {

    return (
        <form className={styles.form}>
            <label htmlFor={props.id}>Amount</label>
            <input id={props.id} type='number' step='1' defaultValue='1' min='1' max='5'/>
            <button>+ Add </button>
        </form>
    );
}

export default Form;