// src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import Dropdown from './components/Dropdown';
import CustomDatePicker from './components/Datepicker';

import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from './api';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
function App() {
  
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    // Fetch employees when the component mounts
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleAddEmployee = async (employee) => {
    const addedEmployee = await addEmployee(employee);
    setEmployees([...employees, addedEmployee]);
  };

  const handleUpdateEmployee = async (id, employee) => {
    await updateEmployee(id, employee);
    const updatedEmployees = employees.map((emp) =>
      emp.id === id ? { ...emp, ...employee } : emp
    );
    setEmployees(updatedEmployees);
    setSelectedEmployee(null);
  };

  const handleDeleteEmployee = async (id) => {
    await deleteEmployee(id);
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <EmployeeForm
        onAddEmployee={handleAddEmployee}
        onUpdateEmployee={handleUpdateEmployee}
        selectedEmployee={selectedEmployee}
      />
      <EmployeeList
        employees={employees}
        onSelectEmployee={(emp) => setSelectedEmployee(emp)}
        onDeleteEmployee={handleDeleteEmployee}
      />
      <div className="App">
      <h1>Custom Dropdown Example</h1>
      <Dropdown options={options} />
    </div>
    </div>
  );
}

export default App;
