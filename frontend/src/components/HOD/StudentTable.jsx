import React from 'react';
import { Link } from 'react-router-dom';

<Link to={`/hod/student/${student._id}`} className="text-blue-500 underline">
  View Details
</Link>

import { Link } from 'react-router-dom';

// Inside your table row for each student

<Link
  to={`/hod/student/${student._id}/attendance`}
  className="text-green-500 underline"
>
  View Attendance
</Link>

// src/components/HOD/StudentTable.jsx

import { Link } from 'react-router-dom';

// Inside your table row for each student
<Link
  to={`/hod/student/${student._id}/marks`}
  className="text-blue-500 underline"
>
  View Marks
</Link>



const StudentTable = ({ students }) => {
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student._id} className="border">
            <td className="px-4 py-2">{student.name}</td>
            <td>{student.email}</td>
            <td>{student.department}</td>
            <td>
              <Link to={`/hod/student/${student._id}`} className="text-blue-500 underline">
                View Details
              </Link>
            </td>
          </tr>
        ))}
      
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">{student.name}</h2>
      <p><strong>Roll No:</strong> {student.rollNumber}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <p><strong>Year:</strong> {student.year}</p>
      <p><strong>Section:</strong> {student.section}</p>
    
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id} className="border">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{student.name}</td>
              <td className="p-2 border">{student.email}</td>
              <td className="p-2 border">{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Attendance</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.email}</td>
              <td>{student.attendance}%</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></div></tbody>

</table>
</div>
  );
};

export default StudentTable;
