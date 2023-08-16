import React from 'react';
import './FriendListItem.css';
import PropTypes from 'prop-types';

export const FriendListItem = props => {
  return (
    <li className="item" key={props.id}>
      <span
        className="status"
        style={{ backgroundColor: props.isOnline ? 'green' : 'red' }}
      ></span>
      <img
        className="friend-avatar"
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{props.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
