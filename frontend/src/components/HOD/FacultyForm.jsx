// src/components/HOD/FacultyForm.jsx

import React, { useState } from 'react';

const FacultyForm = ({ onSubmit, initialData = {} }) => {
  const [faculty, setFaculty] = useState({
    name: '',
    email: '',
    department: '',
    password: '',
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaculty((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(faculty);

    // Reset form after submit
    setFaculty({
      name: '',
      email: '',
      department: '',
      password: '',
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mt-6 mb-2">Add New Faculty</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={faculty.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={faculty.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            type="text"
            name="department"
            value={faculty.department}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={faculty.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Add Faculty
          </button>
        </div>
      </form>
    </div>
  );
};

export default FacultyForm;
