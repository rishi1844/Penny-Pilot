import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-[700px] bg-[#29333c] rounded-xl shadow-lg overflow-auto p-3">
        {props.items.length === 0 ? (
          <p className="text-white text-center">No expenses found.</p>
        ) : (
          props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
              onDelete={props.onDeleteExpense}
            />
          ))
        )}
      </div>
    </div>
  );
};


export default Expenses;
