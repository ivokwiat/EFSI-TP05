import React from 'react';

const Flag = ({ randomFlag }) => {
  return (
    <div className="flag-container">
      <img className="flag" src={randomFlag.flag} alt="ejemplo" />
    </div>
  );
};

export default Flag;
