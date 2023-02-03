import React, { useState } from 'react';
import Header from './components/header/Header';
import Notifications from './components/notifications/Notifications';
import notificationsList from './data/notificationsList';

export default function App() {
  const [read, setRead] = useState(notificationsList);

  return (
    <main className="main">
      <section className="notifications">
        <div className="c-notifications">
          <Header setRead={setRead} />
          <Notifications />
        </div>
      </section>
    </main>
  );
}
