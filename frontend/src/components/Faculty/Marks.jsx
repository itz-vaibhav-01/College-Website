import { useEffect, useState } from 'react';
import { getMarks } from '../../api/facultyApi';

const Marks = () => {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const data = await getMarks();
        setMarks(data);
      } catch (error) {
        console.error('Error fetching marks:', error);
      }
    };
    fetchMarks();
  }, []);

  return (
    <div>
      <h2>Marks</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((item) => (
            <tr key={item._id}>
              <td>{item.studentId.name}</td>
              <td>{item.subject}</td>
              <td>{item.marks}</td>
              <td>{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marks;
