import React from 'react';
import { shallow } from 'enzyme';

import NotificationList from '../';
import Notification from '../Notification';

const notifications = [
  {
    text: 'notification 1',
    id: '1',
    date: 'Fri Mar 15 2019 09:00:00 GMT-0400',
  },
  {
    text: 'notification 2',
    id: '2',
    date: 'Fri Mar 15 2019 09:10:00 GMT-0400',
  },
  {
    text: 'notification 3',
    id: '3',
    date: 'Fri Mar 15 2019 09:20:00 GMT-0400',
  },
  {
    text: 'notification 4',
    id: '4',
    date: 'Fri Mar 15 2019 09:30:00 GMT-0400',
  },
  {
    text: 'notification 5',
    id: '5',
    date: 'Fri Mar 15 2019 09:40:00 GMT-0400',
  },
  {
    text: 'notification 6',
    id: '6',
    date: 'Fri Mar 15 2019 09:50:00 GMT-0400',
  },
];

describe ('NotificationList', () => {
  it('renders a message when no notifications are passed in', () => {
    const wrapper = shallow(<NotificationList notifications={[]} />);
    expect(wrapper.text()).toEqual('No new notifications.You\'re all caught up!');
  });

  it('renders up to five notifications', () => {
    const wrapper = shallow(<NotificationList notifications={notifications} />);
    expect(wrapper.find(Notification).length).toEqual(5);
  });

  it('renders the most recent notifications first', () => {
    const wrapper = shallow(<NotificationList notifications={notifications} />);
    const renderedNotifications = wrapper.find(Notification);

    const expectedIds = ['6', '5', '4', '3', '2'];
    const receivedIds = renderedNotifications.map((notifComponent) => notifComponent.prop('id'));

    expect(receivedIds).toEqual(expectedIds);
  });

  it('renders an unread notification', () => {
    const unreadNotification = {
      text: 'notification 1',
      id: '1',
      date: 'Fri Mar 15 2019 09:00:00 GMT-0400',
      unread: true,
    };

    const wrapper = shallow(<NotificationList notifications={[unreadNotification]} />);
    expect(wrapper.find(Notification).first().prop('unread')).toBeTruthy
  });

  it('can render a gamut icon', () => {

  });
});