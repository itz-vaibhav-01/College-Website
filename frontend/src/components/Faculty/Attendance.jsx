import { useEffect, useState } from 'react';
import { getAttendance } from '../../api/facultyApi';

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const data = await getAttendance();
        setAttendance(data);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };
    fetchAttendance();
  }, []);

  return (
    <div>
      <h2>Attendance</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((item) => (
            <tr key={item._id}>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>{item.studentId.name}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
