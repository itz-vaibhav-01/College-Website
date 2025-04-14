import { useEffect, useState } from 'react';
import { getNotifications } from '../../api/studentApi';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <p>No new notifications</p>
        ) : (
          notifications.map((notification) => (
            <div key={notification._id} className="border p-4 rounded-md">
              <h3 className="font-bold">{notification.title}</h3>
              <p>{notification.message}</p>
              <p className="text-sm text-gray-500">{new Date(notification.date).toLocaleDateString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
