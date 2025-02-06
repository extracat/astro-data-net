import React, { useState } from 'react';
import { AiOutlineInfoCircle, AiOutlineWarning, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

// Icons
const iconMap = {
  info: <AiOutlineInfoCircle className="text-blue-500" />,
  danger: <AiOutlineCloseCircle className="text-adn-color-error" />,
  warning: <AiOutlineWarning className="text-adn-color-warning" />,
  success: <AiOutlineCheckCircle className="text-green-500" />,
};

const Alert = ({ type = 'info', message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={`flex items-center p-4 mb-4 border rounded-md shadow-xs ${type === 'info' ? 'bg-blue-100 border-blue-300' : ''} ${type === 'danger' ? 'bg-red-100 dark:bg-red-950 border-adn-color-error' : ''} ${type === 'warning' ? 'bg-yellow-100 border-yellow-300' : ''} ${type === 'success' ? 'bg-green-100 border-green-300' : ''}`}>
      {/* Icon */}
      <div className="mr-3">
        {iconMap[type]}
      </div>
      
      {/* Message */}
      <div className="flex-1 text-adn-color-text-default">
        {message}
      </div>
      
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="text-adn-color-text-default hover:text-adn-color-text-active focus:outline-hidden"
      >
        <IoMdClose className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Alert;
