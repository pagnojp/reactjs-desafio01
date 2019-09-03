import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ name, avatar, time }) => (
  <div className="postHeader">
    <img src={`images/${avatar}`} alt="Avatar" />
    <h2>{name}</h2>
    <p>{time}</p>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
