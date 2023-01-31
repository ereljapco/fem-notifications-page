import React from 'react';
import Header from './components/header/Header';
import Notifications from './components/notifications/Notifications';

export default function App() {
  return (
    <>
      <section className="notifications">
        <div className="c-notifications">
          <Header />
          <Notifications />
        </div>
      </section>
    </>
  );
}
