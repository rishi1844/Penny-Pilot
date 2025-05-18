import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [tiltes, setTitle] = useState("");
  const [amounts, setAmount] = useState("");
  const [dates, setDates] = useState("");
  const [total, setTotal] = useState(null);

  const titleChange = (event) => setTitle(event.target.value);
  const amountChange = (event) => setAmount(event.target.value);
  const dateChange = (event) => setDates(event.target.value);

  const submithandler = (event) => {
    event.preventDefault();

    const exData = {
      title: tiltes,
      amount: +amounts,
      date: new Date(dates),
    };

    props.onAddExpense(exData);

    // Clear inputs
    setTitle("");
    setAmount("");
    setDates("");
  };

  // 🧮 Calculate total expense
  const handleTotalClick = () => {
    const allExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const totalAmount = allExpenses.reduce((acc, curr) => acc + curr.amount, 0);
    setTotal(totalAmount.toFixed(2));
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={submithandler}
        className="w-full max-w-2xl bg-[#bd76f5] rounded-xl shadow-lg p-8"
      >
        {/* Inputs */}
        <div className="flex flex-wrap gap-x-[150px] gap-y-[10px] mb-6">
          <div className="flex-col-reverse w-full md:w-[30%]">
            <label className="font-bold">Title</label>
            <input
              type="text"
              value={tiltes}
              className="p-2 rounded border border-black bg-white w-[250px]"
              onChange={titleChange}
            />
          </div>

          <div className="flex-col-reverse w-full md:w-[30%]">
            <label className="font-bold mb-2">Amount</label>
            <input
              type="number"
              value={amounts}
              min="0.01"
              step="0.01"
              className="p-2 rounded border border-black bg-white w-[250px]"
              onChange={amountChange}
            />
          </div>

          <div className="flex-col-reverse w-full md:w-[30%]">
            <label className="font-bold mb-2">Date</label>
            <input
              type="date"
              value={dates}
              className="p-2 rounded border border-black bg-white w-[250px]"
              onChange={dateChange}
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between items-center mt-4 gap-4">
          <button
            type="button"
            onClick={handleTotalClick}
            className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 transition"
          >
            Calculate Total
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 transition"
          >
            Add Expense
          </button>
        </div>

        {/* Total Display */}
        {total !== null && (
          <p className="text-white mt-4 text-left font-bold text-lg">
            Total Expenses: ${total}
          </p>
        )}
      </form>
    </div>
  );
};

export default ExpenseForm;
