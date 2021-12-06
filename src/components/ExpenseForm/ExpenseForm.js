import React, { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm({
    onSaveExpenseData
}) {
  const [entTitle, setEntTitle] = useState("");
  const [entAmount, setEntAmount] = useState(0);
  const [entDate, setEntDate] = useState("");

  const titleChangeHandler = (e) => {
    setEntTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEntAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEntDate(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const expense = {
      title: entTitle,
      amount: entAmount,
      date: new Date(entDate),
    };

    onSaveExpenseData(expense);

    setEntTitle("");
    setEntAmount("");
    setEntDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entTitle} onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
