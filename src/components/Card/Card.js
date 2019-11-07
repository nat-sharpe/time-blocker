import React from 'react';
import './Card.css';

const Card = props => {

  return (
    <div className="Card">
      <h4 className="card-title">
        {props.title}
      </h4>
      <div className="card-children">
        {props.children}
      </div>
    </div>
  );
}

export default Card;