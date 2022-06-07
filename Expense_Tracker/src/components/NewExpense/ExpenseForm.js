import "./ExpenseForm.css";
import { useState, UseState } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [userInfo, setUserInfo] = useState({
    amount: "",
    date: new Date(),
  });

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeAmount = (event) => {
    setUserInfo((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const changeDate = (event) => {
    setUserInfo((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const cancelForm = (event) => {
    event.preventDefault();
    props.cancelForm(null);
    setTitle("");
    setUserInfo({ amount: "", date: new Date() });
  };

  const submitValues = (event) => {
    event.preventDefault();

    const values = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      price: userInfo.amount,
      date: new Date(userInfo.date),
    };

    props.onSubmit(values);
    setTitle("");
    setUserInfo({ amount: "", date: new Date() });
  };

  return (
    <form onSubmit={submitValues}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={changeTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            value={userInfo.amount}
            onChange={changeAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={userInfo.date} onChange={changeDate} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={cancelForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
