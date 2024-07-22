import React, { useState } from 'react';
import { AiOutlineInfoCircle, AiOutlineWarning, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

// Определение иконок для разных типов
const iconMap = {
  info: <AiOutlineInfoCircle className="text-blue-500" />,
  danger: <AiOutlineCloseCircle className="text-red-500" />,
  warning: <AiOutlineWarning className="text-yellow-500" />,
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
    <div className={`flex items-center p-4 mb-4 border rounded-md shadow-sm ${type === 'info' ? 'bg-blue-100 border-blue-300' : ''} ${type === 'danger' ? 'bg-red-100 border-red-300' : ''} ${type === 'warning' ? 'bg-yellow-100 border-yellow-300' : ''} ${type === 'success' ? 'bg-green-100 border-green-300' : ''}`}>
      {/* Иконка */}
      <div className="mr-3">
        {iconMap[type]}
      </div>
      
      {/* Сообщение */}
      <div className="flex-1">
        {message}
      </div>
      
      {/* Кнопка закрытия */}
      <button
        onClick={handleClose}
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <IoMdClose className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Alert;
