import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  defaultValue: string;
  label: string;
  onChange: (selectedValue: string) => void; // Define the type of the callback function
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  label,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) onChange(newValue); // Notify parent of the change
  };

  return (
    <div style={{ display: "inline-block", margin: "10px" }}>
      {label && (
        <label
          htmlFor="dropdown-select"
          style={{ marginRight: "8px", fontWeight: "bold" }}
        >
          {label}
        </label>
      )}
      <select
        id="dropdown-select"
        value={selectedValue}
        onChange={handleChange}
        style={{
          padding: "8px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
