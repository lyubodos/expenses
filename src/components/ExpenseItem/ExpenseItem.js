import React from "react";
import { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem({ expDate, title, price }) {

  const month = expDate.toLocaleString("en-US", { month: "long" });
  const day = expDate.toLocaleString("en-US", { day: "2-digit" });
  const year = expDate.getFullYear();

  const [titl, setTitl] = useState(title);

  const chgTitle = () => {
    setTitl("Updated!");

  }

  return (
    <div className="expense-item">
      <ExpenseDate month={month} day={day} year={year} />
      <div className="expense-item__description">
        <h2>{titl}</h2>
      </div>
      <div className="expense-item__price">{price}</div>
      <button onClick={chgTitle}>Change Title</button>
    </div>
  );
}
