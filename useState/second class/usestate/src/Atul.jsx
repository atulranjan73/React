import React, { useState } from "react";
import "./atul.css";

function Atul() {
  // State to store student details
  const [student, setStudent] = useState({
    name: "Atul Ranjan",
    rollNo: "102",
    branch: "CSE",
    age: 22,
  });

  // State to manage form input
  const [formData, setFormData] = useState({
    name: student.name,
    rollNo: student.rollNo,
    branch: student.branch,
    age: student.age,
  });

  // Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    setStudent({
      name: formData.name,
      rollNo: formData.rollNo,
      branch: formData.branch,
      age: formData.age,
    });
  }

  return (
    <div className="container">
      <h1 className="heading">Student Details</h1>
      <div className="details">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Roll No:</strong> {student.rollNo}</p>
        <p><strong>Branch:</strong> {student.branch}</p>
        <p><strong>Age:</strong> {student.age}</p>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Roll No:</label>
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Branch:</label>
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <button className="submit-button" type="submit">
          Update Details
        </button>
      </form>
    </div>
  );
}

export default Atul;
