import React from 'react';
import './LongButton.css';

const LongButton = props => {
  const { className, handleClick, text } = props;
  return (
    <div 
      className={className}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default LongButton;
