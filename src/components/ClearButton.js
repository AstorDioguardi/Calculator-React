import React from 'react';

const ClearButton = (props) => (
  <div className='clear__button' onClick={props.checkClear}>
    Clear
  </div>
);

export default ClearButton;