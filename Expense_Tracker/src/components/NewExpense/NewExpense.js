import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {

    const formValues = (values) => {
        props.onAddExpense(values);
    }

    return (
        <div className='new-expense'>
        <ExpenseForm  onSubmit={formValues} />
        </div>
    );
}

export default NewExpense;