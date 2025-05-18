import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [edit, setEdit] = useState(false);

  const date = props.date;
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  const handleDelete = () => {
    props.onDelete(props.id); // Trigger parent delete handler
  };

  return (
    <div className="flex justify-between items-center shadow-md p-2 mt-5 mx-2 rounded bg-gray-900">
      <div className="flex items-center gap-4">
        <div className="gap-1 text-sm text-white text-center border border-white bg-[#171515] w-18 h-18 p-2 rounded-xl">
          <div className="text-[10px] font-bold">{month}</div>
          <div className="text-[10px]">{year}</div>
          <div className="text-[22px] font-bold">{day}</div>
        </div>

        {edit ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setEdit(false)}
            onKeyDown={(e) => e.key === "Enter" && setEdit(false)}
            autoFocus
            className="text-xl text-white font-semibold px-2 rounded"
          />
        ) : (
          <h2
            onDoubleClick={() => setEdit(true)}
            className="text-xl font-semibold text-white cursor-pointer"
          >
            {title}
          </h2>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div
          className="text-white text-lg font-bold border border-white px-4 py-2"
          style={{ backgroundColor: "#40005d", borderRadius: "12px" }}
        >
          ${props.amount}
        </div>
        
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
          title="Delete"
        >
          <FaTrash />
        </button>

      </div>
    </div>
  );
};

export default ExpenseItem;


