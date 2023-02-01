import React from 'react';
import userList from '../../data/userList';
import notificationsList from '../../data/notificationsList';

import './notifications.css';

export default function Notifications() {
  return (
    <section className="notifications-list">
      {notificationsList.map((notification) => {
        const {
          id,
          isRead,
          userId,
          notificationMsg,
          itemTitle,
          itemLink,
          itemImg,
          itemMsg,
          timeStamp,
        } = notification;
        const user = userList.find((user) => user.id === userId);
        return (
          <article
            key={id}
            className={
              isRead === 'yes'
                ? 'notification'
                : 'notification notification--unread'
            }
          >
            <img
              className="notification__user-img"
              src={user.img}
              alt={user.name}
            />
            <div className="c-notification">
              <div className="c-notification__body">
                <p className="notification__body">
                  <a className="notification__username" href={user.url}>
                    {user.name}
                  </a>
                  <span className="notification__msg">{notificationMsg}</span>
                  {itemTitle ? (
                    <a className="notification__item-link" href={itemLink}>
                      {itemTitle}
                    </a>
                  ) : (
                    ''
                  )}
                  {isRead === 'yes' ? (
                    ''
                  ) : (
                    <span className="notification__unread-dot">&#9679;</span>
                  )}
                </p>
                <p className="notification__timestamp">{timeStamp} ago</p>
                {itemImg ? (
                  <a className="notification__item-img-link" href={itemLink}>
                    <img
                      className="notification__item-img"
                      src={itemImg}
                      alt=""
                    />
                  </a>
                ) : (
                  ''
                )}
              </div>
              {itemMsg ? (
                <p className="notification__item-msg">{itemMsg}</p>
              ) : (
                ''
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}
