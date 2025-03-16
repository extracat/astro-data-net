import React from 'react';
import { LuPlus, LuX } from 'react-icons/lu';
import Button from "./Button";

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
        <div key={index} className="flex gap-2 items-start">
          <div className="flex-1">
            {renderItem(item, index, handleItemChange)}
          </div>
          <Button
            onClick={() => handleRemove(index)}
            variant="blank"
            icon={<LuX />}
          ></Button>
        </div>
      ))}
      
      <Button
        variant="blank"
        onClick={handleAdd}
        icon={<LuPlus />}
      >
        {addButtonText}
      </Button>
    </div>
  );
};

export default ArrayContainer;