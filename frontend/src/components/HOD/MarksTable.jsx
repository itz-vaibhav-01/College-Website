// src/components/HOD/MarksTable.jsx

import React from 'react';

const MarksTable = ({ marks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Subject</th>
            <th className="py-2 px-4 border">Marks Obtained</th>
            <th className="py-2 px-4 border">Total Marks</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{mark.subject}</td>
              <td className="py-2 px-4 border">{mark.obtained}</td>
              <td className="py-2 px-4 border">{mark.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarksTable;
