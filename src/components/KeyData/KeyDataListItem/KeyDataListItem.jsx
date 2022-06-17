import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './KeyDataListItem.scss';
import UserDataContext from '../../../utils/context/UserDataContext';
import Error from '../../../views/Error/Error';
import Loader from '../../Loader/Loader';
const KeyDataListItem = ({ picture, number, unit, type }) => {
  // const { userData, isLoading, error } = useContext(UserDataContext);

  // if (error) {
  //   return <Error />;
  // }
  // return isLoading ? (
  //   <Loader />
  // ) :
  return (
    <div className="key-data">
      <img src={picture} alt="" />
      <div className="key-data-content">
        <p>
          {number}
          {unit}
        </p>
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
