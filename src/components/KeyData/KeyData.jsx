import './KeyData.scss';

const KeyData = ({ picture, number, unit, type }) => {
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

export default KeyData;
