import React, { useState } from 'react';

const DragNDrop = ({ initialItems }) => {
  // items – массив элементов, например: [{ id: '1', text: 'Item 1' }, ...]
  const [items, setItems] = useState(initialItems);
  const [draggingIndex, setDraggingIndex] = useState(null); // индекс элемента, который перетаскивается
  const [placeholderIndex, setPlaceholderIndex] = useState(null); // позиция, куда элемент будет перемещён

  // Function to reorder array items
  const reorder = (list, startIndex, endIndex) => {
    const updatedList = [...list];
    const [removed] = updatedList.splice(startIndex, 1);
    updatedList.splice(endIndex, 0, removed);
    return updatedList;
  };

  // Handler for drag start on the drag handle
  const handleDragStart = (e, index) => {
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    // Optional: set a custom drag image if needed
    // e.dataTransfer.setDragImage(e.target, 0, 0);
  };

  // Handler for drag over each item container to determine drop position
  const handleDragOver = (e, index) => {
    e.preventDefault(); // Necessary to allow dropping
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const offsetY = e.clientY - rect.top;
    // Determine placeholder position: above or below the current item
    let newPlaceholderIndex = index;
    if (offsetY > rect.height / 2) {
      newPlaceholderIndex = index + 1;
    }
    if (newPlaceholderIndex !== placeholderIndex) {
      setPlaceholderIndex(newPlaceholderIndex);
    }
  };

  // Handler for drop event on the container
  const handleDrop = (e) => {
    e.preventDefault();
    if (draggingIndex === null || placeholderIndex === null) return;
    // Если элемент перемещается вниз, индекс смещается на 1
    const adjustedIndex =
      draggingIndex < placeholderIndex ? placeholderIndex - 1 : placeholderIndex;
    const newItems = reorder(items, draggingIndex, adjustedIndex);
    setItems(newItems);
    // Сброс состояний
    setDraggingIndex(null);
    setPlaceholderIndex(null);
  };

  // Handler for drag end (в случае отмены перетаскивания)
  const handleDragEnd = () => {
    setDraggingIndex(null);
    setPlaceholderIndex(null);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      style={{ width: '300px', margin: '0 auto' }}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          {/* Отрисовка индикатора места вставки, если placeholder совпадает с текущим индексом */}
          {placeholderIndex === index && (
            <div style={{ height: '2px', backgroundColor: 'blue', margin: '4px 0' }} />
          )}
          <div
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              marginBottom: '4px',
              backgroundColor: 'white',
              position: 'relative',
            }}
            onDragOver={(e) => handleDragOver(e, index)}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Drag handle: только эта область запускает перетаскивание */}
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnd={handleDragEnd}
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#888',
                  marginRight: '8px',
                  cursor: 'grab',
                }}
              />
              {/* Контент элемента: input */}
              <input
                type="text"
                defaultValue={item.text}
                disabled={draggingIndex === index} // input дизейблится, когда элемент перетаскивается
                style={{ flex: 1 }}
              />
            </div>
            {/* Если данный элемент перетаскивается, отрисовываем поверх оверлей-заглушку */}
            {draggingIndex === index && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255,255,255,0.6)',
                  pointerEvents: 'none',
                }}
              />
            )}
          </div>
        </React.Fragment>
      ))}
      {/* Если placeholder находится после последнего элемента */}
      {placeholderIndex === items.length && (
        <div style={{ height: '2px', backgroundColor: 'blue', margin: '4px 0' }} />
      )}
    </div>
  );
};

export default DragNDrop;
