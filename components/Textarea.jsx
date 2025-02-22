import React, { useState, useEffect } from 'react';

const Textarea = ({ 
  name, 
  placeholder = '', 
  value: propValue, 
  onChange, 
  className = '',
  rows = 4 
}) => {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <textarea
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      rows={rows}
      className={`textarea ${className}`}
    />
  );
};

export default Textarea;