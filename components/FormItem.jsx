import React from 'react';

const FormItem = ({ 
  label, 
  error, 
  children,
  ...props 
}) => {
  const errorMessages = Array.isArray(error) ? error : [error];

  return (
    <div className="w-full mb-4 form-control">
      {label && (
        <label className="label" htmlFor={props.id}>
          {label}
        </label>
      )}
      
      <div className="relative">
        {React.cloneElement(children, { ...props })}
      </div>
      
      {errorMessages.length > 0 && (
        <div className="mt-1 ml-4">
          {errorMessages.map((msg, index) => (
            msg ? <div key={index} className="text-sm text-adn-color-error-dark">{msg}</div> : null
          ))}
        </div>
      )}
    </div>
  );
};

export default FormItem;
