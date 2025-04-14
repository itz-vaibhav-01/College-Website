import axios from 'axios';


const API = axios.create({baseURL: 'http://localhost:5000/api/hod',});

export const getFacultyById = (id) => API.get(`/faculty/${id}`);

export const fetchAllStudents = () => API.get('/students');
export const fetchAllFaculties = () => API.get('/faculties');
export const fetchStudentById = (id) => API.get(`/student/${id}`);
export const fetchFacultyById = (id) => API.get(`/faculty/${id}`);

export const AddFaculty = (facultyData) =>
    axios.post("/api/hod/faculty", facultyData);
  
// Face Verification

// Get All Students
export const fetchAllStudentsFromAPI = () => API.get('/students');


export const deleteFacultyById = (facultyId) =>
    API.delete(`/hod/faculty/${facultyId}`);

// Fetch Single Student By Id
export const getStudentById = (id) => API.get(`/student/${id}`);


// Get Student Attendance
export const getStudentAttendance = async (studentId) => {
    try {
      const res = await axios.get(`${BASE_URL}/student/${studentId}/attendance`);
      return res.data;
    } catch (error) {
      throw error;
    }
  };
// Fetch Student Marks
export const getStudentMarks = async (studentId) => {
    try {
      const response = await axios.get(`${BASE_URL}/student/${studentId}/marks`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  
// Fetch All Faculties
export const getAllFaculties = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/faculties`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Add New Faculty
  export const addFaculty = async (facultyData) => {
    try {
      const response = await axios.post(`${BASE_URL}/faculties`, facultyData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Update Faculty Details
  export const updateFaculty = async (facultyId, updatedData) => {
    try {
      const response = await axios.put(`${BASE_URL}/faculties/${facultyId}`, updatedData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Delete Faculty
  export const deleteFaculty = async (facultyId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/faculties/${facultyId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

//deleteStudent

export const deleteStudent = (id) => axios.delete(`/api/hod/students/${id}`);

export const createStudent = async (studentData) => {
  const res = await fetch("/api/hod/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentData),
  });
  return res.json();
};

export const fetchAllStudentsFromFetch = async () => {
  const res = await fetch("/api/hod/students");
  return res.json();
};

export const deleteStudentById = async (id) => {
  const res = await fetch(`/api/hod/students/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

export const getStudentDetails = async (id) => {
  const res = await fetch(`/api/hod/students/${id}`);
  return res.json();
};

  const response = await fetch(`/api/hod/faculties/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch faculty by ID');
  }
  return response.json();

