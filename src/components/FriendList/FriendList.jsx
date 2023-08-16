import React from 'react';
import './FriendList.css';
import PropTypes from 'prop-types';

export const FriendList = props => {
  return <ul className="friend-list">{props.children}</ul>;
};

FriendList.propTypes = {
  children: PropTypes.element.isRequired,
};
