import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    price: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    price: 450,
    date: new Date(2019, 5, 12),
  },
];

function App() {
  const [expenses, addExpense] = useState(dummy_expenses);

  const newExpense = (data) => {
    console.log("------", data);
    addExpense((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={newExpense} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
