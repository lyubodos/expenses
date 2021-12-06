import { useState } from "react";
import NewExpense from "./components/ExpenseForm/NewExpense";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
  const [expenseData, setExpenseData] = useState([
    {
      id: "e01",
      expDate: new Date(2021, 2, 12),
      title: "Car Maintenance",
      price: "356.23$",
    },
    {
      id: "e02",
      expDate: new Date(2021, 1, 11),
      title: "Fitnes payment",
      price: "36.00$",
    },
    {
      id: "e03",
      expDate: new Date(2021, 20, 7),
      title: "House utilities",
      price: "90.80$",
    },
  ]);

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <div className="expenses">
        <NewExpense onAddExpense={addExpenseHandler} />
        {expenseData.map((data) => {
          return <ExpenseItem key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
}

export default App;
