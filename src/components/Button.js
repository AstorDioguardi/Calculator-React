import React from 'react';

const Button = (props) => {

  const isOperator = value => {
   return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <button className={`calculator__button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()} onClick={() => props.checkClick(props.children)}>
      {props.children}
    </button>
  )
};

export default Button;