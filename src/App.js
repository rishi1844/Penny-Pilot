import React, { useState, useEffect } from "react";
import Expenses from "./components/expense/Expenses";
import ExpenseForm from "./components/expense/NewExpenses";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses
  ? JSON.parse(storedExpenses).map((expense) => ({
      ...expense,
      date: new Date(expense.date),
    }))
  : [];
  });

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Function to add new expense
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [
      { ...expense, id: Math.random().toString() },
      ...prevExpenses,
    ]);
  };

  const deleteExpenseHandler = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };


  return (
    <div>
      <h1 className="text-white text-2xl text-center font-bold mb-6">
        Let's get started
      </h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler} />

    </div>
  );
}

export default App;
