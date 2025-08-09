import React from 'react';
import './Button.css';

// eslint-disable-next-line react/prop-types
const Button = ({content, type = 'btn', setOnClick}) => {
  return (
    <div>
        <button className={`${type}`} onClick={setOnClick}>
          {content}
        </button>
    </div>
  )
}

export default Button