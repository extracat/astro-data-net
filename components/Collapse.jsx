import React, { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

const Collapse = ({ 
  header,
  children,
  defaultOpen = false,
  hasError = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  // Convert hasError to boolean and treat empty arrays as false
  const hasErrorValue = Array.isArray(hasError) ? hasError.length > 0 : Boolean(hasError);

  return (
    <div className={`border rounded-lg ${hasErrorValue ? 'border-red-500' : 'border-adn-color-border-light'} ${className}`}>
      {/* Header section */}
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          {header}
        </div>
        
        <LuChevronDown 
          className={`w-5 h-5 text-adn-color-text-default transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </div>

      {/* Content section */}
      <div 
        className={`transition-all duration-200 ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 h-0 pointer-events-none overflow-hidden'
        }`}
      >
        <div className="p-4 border-t border-adn-color-border-light overflow-visible">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;