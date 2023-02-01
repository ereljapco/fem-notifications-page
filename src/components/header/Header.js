import React, { useState } from 'react';

import './header.css';

export default function Header({ setRead, notificationsList }) {
  const unread = notificationsList.filter(
    (notification) => notification.isRead === ''
  );
  const [unreadCount, setUnreadCount] = useState(unread.length);

  const markReadAll = () => {
    const allReadNotifications = notificationsList.map((notification) => {
      if (notification.isRead === '') {
        notification.isRead = 'yes';
      }

      return notification;
    });

    setRead(allReadNotifications);
    setUnreadCount(0);
  };
  return (
    <header className="notifications__header">
      <h1 className="notifications__title">
        Notifications
        <span className="notifications__unread-count">{unreadCount}</span>
      </h1>
      <button
        className="notifications__all-read-btn"
        onClick={() => markReadAll()}
      >
        Mark all as read
      </button>
    </header>
  );
}
