import React from 'react';

const FormContent = ({id, label, type, placeholder, value, onchange}) => {
  return (
    <div className="form-content">
        <label htmlFor={id}>{label}</label>
        <input 
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        />
    </div>
  )
}

export default FormContent;