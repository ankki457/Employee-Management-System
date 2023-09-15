import React, { useState } from 'react';

function AddEmployee() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
      // Make an API POST request to add a new employee to the server
      const response = await fetch('https://sweede.app/DeliveryBoy/Add-Employee/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      } else {
        // Handle errors, e.g., display an error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for employee data */}
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          required
        />
        {/* Add other input fields for employee data */}
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
