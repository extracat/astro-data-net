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
      className={`rounded-lg flex-1 appearance-none w-full py-2 px-4 border border-adn-color-border-light bg-adn-color-control-bg focus:bg-adn-color-control-bg-active text-adn-color-text-default placeholder-adn-color-text-placeholder focus:outline-none focus:ring-1 focus:ring-adn-color-primary-light focus:border-adn-color-primary-light ${className}`}
    />
  );
};

export default Input;
