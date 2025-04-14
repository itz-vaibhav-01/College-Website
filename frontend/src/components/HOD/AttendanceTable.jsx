import React from 'react';

const AttendanceTable = ({ attendance }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{record.date}</td>
              <td className="py-2 px-4 border">
                {record.status === "Present" ? "✅ Present" : "❌ Absent"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
