// src/components/HOD/FacultyTable.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const FacultyTable = ({ faculties, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Department</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {faculties.map((faculty, index) => (
            <tr key={faculty._id} className="border">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{faculty.name}</td>
              <td className="p-2 border">{faculty.email}</td>
              <td className="p-2 border">{faculty.department}</td>
              <td className="p-2 border flex gap-2">
                <Link
                  to={`/hod/faculty/${faculty._id}`}
                  className="text-blue-500 underline"
                >
                  View Details
                </Link>

                <button
                  onClick={() => onDelete(faculty._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyTable;
