// EmployeeItem.js

import React from 'react';

const EmployeeItem = ({ employee, onDeleteEmployee }) => {
  const handleDeleteClick = () => {
    onDeleteEmployee(employee.id); // Trigger the delete function in the parent component
  };

  return (
    <li className="employee-item">
      <div className="employee-details">
        <p>
          <strong>{employee.firstName} {employee.lastName}</strong>
        </p>
        <p>Date of Birth: {employee.dob}</p>
        <p>Study: {employee.study}</p>
        <p>Start Date: {employee.startDate}</p>
        <p>End Date: {employee.endDate}</p>
        <p>Current Salary: {employee.currentSalary}</p>
        <p>Description: {employee.description}</p>
      </div>
      <button onClick={handleDeleteClick} className="btn-delete">
        Delete
      </button>
    </li>
  );
};

export default EmployeeItem;
