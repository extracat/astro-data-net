import React from 'react';
import { HiPlus, HiTrash } from 'react-icons/hi';

const ArrayContainer = ({ 
  name,
  value = [], 
  onChange,
  renderItem,
  defaultItem = '',
  addButtonText = 'Add Item',
  className = ''
}) => {
  const handleAdd = () => {
    const e = {
      target: {
        name,
        value: [...value, defaultItem]
      }
    };
    onChange(e);
  };

  const handleRemove = (index) => {
    const e = {
      target: {
        name,
        value: value.filter((_, i) => i !== index)
      }
    };
    onChange(e);
  };

  const handleItemChange = (index, newValue) => {
    const newItems = [...value];
    newItems[index] = newValue;
    const e = {
      target: {
        name,
        value: newItems
      }
    };
    onChange(e);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {value.map((item, index) => (
        <div key={index} className="flex gap-4 items-start">
          <div className="flex-1">
            {renderItem(item, index, handleItemChange)}
          </div>
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50"
            aria-label="Remove item"
          >
            <HiTrash className="w-5 h-5" />
          </button>
        </div>
      ))}
      
      <button
        type="button"
        onClick={handleAdd}
        className="btn flex items-center gap-2"
      >
        <HiPlus className="w-5 h-5" />
        {addButtonText}
      </button>
    </div>
  );
};

export default ArrayContainer;