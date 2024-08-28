import React from 'react';
import './InputField.css'; // Import the CSS file

const InputField = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">
        {label.replace('_', ' ')}:
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={`Enter ${label.replace('_', ' ')}`}
        />
      </label>
    </div>
  );
};

export default InputField;
