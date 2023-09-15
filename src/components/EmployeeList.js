// src/components/EmployeeList.js

import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list-container">
      <h2>Employee List </h2>
      <div className="employee-list-header">
        <div className="employee-list-item">First Name</div>
        <div className="employee-list-item">Last Name</div>
        <div className="employee-list-item">DOB</div>
        <div className="employee-list-item">Start Date</div>
        <div className="employee-list-item">End Date</div>
        <div className="employee-list-item">Description</div>
      </div>
      {employees.map((employee) => (
        <div className="employee-list-row" key={employee.id}>
          <div className="employee-list-item">{employee.firstName}</div>
          <div className="employee-list-item">{employee.lastName}</div>
          <div className="employee-list-item">{employee.dob}</div>
          <div className="employee-list-item">{employee.startDate}</div>
          <div className="employee-list-item">{employee.endDate}</div>
          <div className="employee-list-item">{employee.description}</div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
