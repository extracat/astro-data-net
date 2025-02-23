import React, { useState } from 'react';
import { HiPlus, HiTrash, HiMenuAlt4 } from 'react-icons/hi';

const ArrayContainer = ({ 
  name,
  value = [], 
  onChange,
  renderItem,
  defaultItem = '',
  addButtonText = 'Add Item',
  className = '',
  draggable = false
}) => {
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [draggedElement, setDraggedElement] = useState(null);

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

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.setData('text/plain', index);
    e.dataTransfer.effectAllowed = 'move';

    // Create ghost element
    const item = e.target.closest('[data-draggable="true"]');
    if (item) {
      // Set opacity for original element
      item.style.opacity = '0.5';
      item.style.transform = 'scale(1.02)';
      item.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      setDraggedElement(item);
      
      // Set custom drag image
      e.dataTransfer.setDragImage(item, 0, 0);
    }
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === index) return;
    
    // Get mouse position relative to the element
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const height = rect.height;
    
    // Update dragOverIndex based on mouse position
    if (y < height / 2) {
      setDragOverIndex(index);
    } else {
      setDragOverIndex(index + 1);
    }
  };

  const handleDragEnd = () => {
    if (draggedElement) {
      draggedElement.style.opacity = '1';
      draggedElement.style.transform = 'none';
      draggedElement.style.boxShadow = 'none';
    }
    setDraggedElement(null);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
    
    if (dragIndex === dropIndex) return;

    const newItems = [...value];
    const [draggedItem] = newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);

    onChange({
      target: {
        name,
        value: newItems
      }
    });

    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {value.map((item, index) => (
        <div key={index}>
          {/* Droppable gap above item */}
          <div 
            className={`h-8 -my-4 ${
              draggedIndex !== null && dragOverIndex === index ? 
              'bg-indigo-50 rounded-lg transition-colors duration-200' : ''
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              if (draggedIndex !== index) {
                setDragOverIndex(index);
              }
            }}
            onDrop={(e) => handleDrop(e, index)}
          />

          <div 
            data-draggable="true"
            className={`flex gap-4 items-start p-2 rounded-lg 
              transition-all duration-200 ease-in-out bg-white
              ${draggedIndex === index ? 
                'opacity-50 scale-105 shadow-xl z-10' : 
                'hover:bg-gray-50'
              }
              ${draggedIndex !== null && index !== draggedIndex ? 
                (index < draggedIndex ? 
                  (index >= dragOverIndex ? 
                    'transform translate-y-8' : '') :
                  (index < dragOverIndex ? 
                    'transform -translate-y-8' : ''))
                : ''
              }`}
          >
            {draggable && (
              <div 
                draggable
                className="cursor-grab active:cursor-grabbing p-2 text-gray-400 hover:text-gray-600 touch-none select-none"
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnd={handleDragEnd}
              >
                <HiMenuAlt4 className="w-5 h-5" />
              </div>
            )}
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
        </div>
      ))}

      {/* Final gap for dropping at the end */}
      {draggedIndex !== null && (
        <div 
          className={`h-8 ${
            dragOverIndex === value.length ? 
            'bg-indigo-50 rounded-lg transition-colors duration-200' : ''
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOverIndex(value.length);
          }}
          onDrop={(e) => handleDrop(e, value.length)}
        />
      )}
      
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