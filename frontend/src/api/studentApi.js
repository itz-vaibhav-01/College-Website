import axios from 'axios';

const API_URL = '/api/student';

// Fetch attendance
export const getAttendance = async () => {
  try {
    const response = await axios.get(`${API_URL}/attendance`);
    return response.data;
  } catch (error) {
    console.error('Error fetching attendance:', error);
    throw error;
  }
};

// Fetch marks
export const getMarks = async () => {
  try {
    const response = await axios.get(`${API_URL}/marks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching marks:', error);
    throw error;
  }
};

// Fetch notifications
export const getNotifications = async () => {
  try {
    const response = await axios.get(`${API_URL}/notifications`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};
