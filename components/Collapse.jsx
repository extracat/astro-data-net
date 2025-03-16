import React, { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

const Collapse = ({ 
  header,
  children,
  defaultOpen = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border border-adn-color-border-light rounded-lg ${className}`}>
      {/* Header section - always visible */}
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Header slot */}
        <div className="flex-1">
          {header}
        </div>
        
        {/* Chevron icon */}
        <LuChevronDown 
          className={`w-5 h-5 text-adn-color-text-default transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </div>

      {/* Content section - collapsible */}
      <div 
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 h-0'
        }`}
      >
        <div className="p-4 border-t border-adn-color-border-light">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;