import React from 'react';

import './header.css';

export default function Header() {
  return (
    <header className="notifications__header">
      <h1 className="notifications__title">
        Notifications<span className="notifications__unread-count">3</span>
      </h1>
      <button className="notifications__all-read-btn">Mark all as read</button>
    </header>
  );
}
