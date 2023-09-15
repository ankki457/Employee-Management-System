import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ options }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsActive(false);
  };

  return (
    <div className={`dropdown-container ${isActive ? 'active' : ''}`}>
      <div className="dropdown-button" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Select an option'}
      </div>
      <div className="dropdown-content">
        {options.map((option) => (
          <div
            className="dropdown-option"
            key={option.value}
            onClick={() => selectOption(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
