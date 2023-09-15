
const BASE_URL = "https://sweede.app/DeliveryBoy"; // Updated BASE_URL

export const getEmployees = async () => {
  try {
    const response = await fetch(`${BASE_URL}/Get-Employee/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch employees (HTTP ${response.status})`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const addEmployee = async (employee) => {
  try {
    const response = await fetch(`${BASE_URL}/Add-Employee/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    if (!response.ok) {
      throw new Error(`Failed to add employee (HTTP ${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

export const updateEmployee = async (id, employee) => {
  try {
    const response = await fetch(`${BASE_URL}/update-Employee/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    if (!response.ok) {
      throw new Error(`Failed to update employee (HTTP ${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/delete-Employee/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete employee (HTTP ${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
}