import React, { useState, useEffect } from 'react';

const Input = ({ name, type = 'text', placeholder = '', value: propValue, onChange, className = '' }) => {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <input
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={`input ${className}`}
    />
  );
};

export default Input;
