import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import Card from "../CommonUI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState} from 'react';

function Expenses(props) {

    const [filteryear, setFilterYear ] = useState('2020');

    const selectedYear = (year) => {
        setFilterYear(year);
    }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteryear}  onChangeFilter={selectedYear}/>
      <ExpenseItem
        title={props.data[0].title}
        date={props.data[0].date}
        price={props.data[0].amount}
      />
      <ExpenseItem
        title={props.data[1].title}
        date={props.data[1].date}
        price={props.data[1].amount}
      />
      <ExpenseItem
        title={props.data[2].title}
        date={props.data[2].date}
        price={props.data[2].amount}
      />
      <ExpenseItem
        title={props.data[3].title}
        date={props.data[3].date}
        price={props.data[3].amount}
      />
    </Card>
  );
}

export default Expenses;
