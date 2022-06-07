import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import Card from "../CommonUI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpenseChart";

import { useState } from "react";

function Expenses(props) {
  const [filteryear, setFilterYear] = useState("2020");

  const selectedYear = (year) => {
    setFilterYear(year);
  };

  const expenseList = props.data.filter(
    (exp) => exp.date.getFullYear() === Number(filteryear)
  );

  let expenseUIContent = <p>No Expenses Found</p>;

  if (expenseList.length > 0) {
    expenseUIContent = expenseList.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteryear} onChangeFilter={selectedYear} />
      <ExpensesChart expenses={expenseList} />

      {expenseUIContent}
    </Card>
  );
}

export default Expenses;
