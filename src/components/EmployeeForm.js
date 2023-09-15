import React, { useState, useEffect } from 'react';
import './EmployeeForm.css';
import initTinyMCE from './TinyMCEAutoresize';
import JoditEditor from 'jodit-react';
import { employees } from './SomeDataFile';

const EmployeeForm = () => {
  console.log(employees);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    study: '',
    startDate: '',
    endDate: '',
    currentSalary: '',
    description: '', // This field represents a rich text editor for employee descriptions.
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://sweede.app/DeliveryBoy/Add-Employee/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Employee added successfully');
        setFormData({
          firstName: '',
          lastName: '',
          dob: '',
          study: '',
          startDate: '',
          endDate: '',
          currentSalary: '',
          description: '', // Clear the rich text editor content.
        });
      } else {
        alert('Failed to add employee');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    initTinyMCE();
  }, []);

  const handleDescriptionChange = (content) => {
    setFormData({
      ...formData,
      description: content,
    });
  };

  return (
    <div className="employee-form-container">
      <h2>Employee Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="name-group">
            <div className="name-field">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="name-field">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Study:</label>
          <input
            type="text"
            name="study"
            value={formData.study}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="date-group">
          <div className="date-field">
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="date-field">
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Current Salary:</label>
          <input
            type="number"
            name="currentSalary"
            value={formData.currentSalary}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description (JoditEditor):</label>
          <JoditEditor
            value={formData.description}
            onChange={handleDescriptionChange}
            config={{
              buttons: 'bold,italic,underline,|,ul,ol,|,font,fontsize,brush,paragraph',
            }}
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn-save">Save</button>
          <button type="button" className="btn-cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;