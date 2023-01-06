import React from 'react';

const Button = ({classname,onclick,title}) => {
  return (
    <button 
    className={classname}
    type='button'
    onClick={onclick}
    >
        {title}
    </button>
  )
}

export default Button;