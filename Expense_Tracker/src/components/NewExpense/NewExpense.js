import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const formValues = (values) => {
    setShowForm(false);
    props.onAddExpense(values);
  };

  function showExpenseForm(event) {
    setShowForm(true);
  }

  function cancelForm(event) {
    setShowForm(false);
  }

  let newExpenseUIContent = null;
  if (!showForm) {
    newExpenseUIContent = (
      <button onClick={showExpenseForm}>Add New Expense</button>
    );
  } else {
    newExpenseUIContent = (
      <ExpenseForm onSubmit={formValues} cancelForm={cancelForm} />
    );
  }

  return <div className="new-expense">{newExpenseUIContent}</div>;
}

export default NewExpense;
