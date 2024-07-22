import React from 'react';

const FormItem = ({ 
  label, 
  error, 
  children,
  ...props 
}) => {
  const errorMessages = Array.isArray(error) ? error : [error];

  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      
      <div className="relative">
        {React.cloneElement(children, { ...props })}
      </div>
      
      {errorMessages.length > 0 && (
        <div className="mt-1">
          {errorMessages.map((msg, index) => (
            msg ? <p key={index} className="text-sm text-red-600">{msg}</p> : null
          ))}
        </div>
      )}
    </div>
  );
};

export default FormItem;
