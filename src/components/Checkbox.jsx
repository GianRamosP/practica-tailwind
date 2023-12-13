import React from "react";

const Checkbox = ({ id, name, text }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        name={name}
        className="w-4 h-4 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:border-blue-100"
      />
      <label htmlFor={id} className="ml-2 text-sm text-gray-600 select-none">
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
