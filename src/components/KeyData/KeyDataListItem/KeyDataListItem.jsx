import React from 'react';
import PropTypes from 'prop-types';
import './KeyDataListItem.scss';
const KeyDataListItem = ({ picture, number, type }) => {
  return (
    <div className="key-data">
      <img src={picture} alt="" />
      <div className="key-data-content">
        <p>{number}</p>
        <h3>{type}</h3>
      </div>
    </div>
  );
};

// KeyDataListItem.propTypes = {
//   picture: PropTypes.string,
//   number: PropTypes.string,
//   type: PropTypes.string,
// };

export default KeyDataListItem;
