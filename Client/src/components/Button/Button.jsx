import React from 'react';
import './Button.css';

// eslint-disable-next-line react/prop-types
const Button = ({content, type = 'btn'}) => {
  return (
    <div>
        <button className={`${type}`}>{content}</button>
    </div>
  )
}

export default Button