// src/components/HOD/Sidebar.jsx

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-6">HOD Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/hod/dashboard" className="text-blue-700 hover:underline">Dashboard</Link>
        </li>
        <li>
          <Link to="/hod/view-all-students" className="text-blue-700 hover:underline">All Students</Link>
        </li>
        <li>
          <Link to="/hod/view-all-faculties" className="text-blue-700 hover:underline">All Faculties</Link>
        </li>
        <li>
          <Link to="/hod/manage-students" className="text-blue-700 hover:underline">Manage Students</Link>
        </li>
        <li>
          <Link to="/hod/manage-faculties" className="text-blue-700 hover:underline">Manage Faculties</Link>
        </li>
        {/* Add more links here */}
      </ul>
    
  

    <div className="w-64 min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-8 text-center">HOD Panel</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/hod/dashboard" className="hover:text-yellow-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/hod/students" className="hover:text-yellow-400">
            View All Students
          </Link>
        </li>
        <li>
          <Link to="/hod/faculties" className="hover:text-yellow-400">
            View All Faculties
          </Link>
        </li>
        <li>
          <Link to="/hod/face-verification" className="hover:text-yellow-400">
            Face Verification
          </Link>
        </li>
      </ul>
    </div></div>
  );
};

export default Sidebar;
