import React, { useState, useEffect, useRef } from 'react';
import Input from './Input';
import { HiChevronDown } from "react-icons/hi";


const Select = ({ name, options = [], placeholder = 'Select an option', value: propValue, onChange, customDropdown = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filter, setFilter] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [dropdownPosition, setDropdownPosition] = useState('bottom'); // 'bottom' or 'top'
  const selectRef = useRef(null);

  // Find the selected option based on the provided value
  useEffect(() => {
    const selected = options.find(option => option.value === propValue) || null;
    setSelectedOption(selected);
  }, [propValue, options]);

  useEffect(() => {
    // Reset highlightedIndex when options change
    setHighlightedIndex(-1);
  }, [options]);

  useEffect(() => {
    const updateDropdownPosition = () => {
      if (selectRef.current) {
        const rect = selectRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the dropdown is going to be cut off at the bottom
        if (rect.bottom + 300 > windowHeight) { // 300 is an estimated height of the dropdown
          setDropdownPosition('top');
        } else {
          setDropdownPosition('bottom');
        }
      }
    };

    // Update dropdown position on open and on window resize
    if (isOpen) {
      updateDropdownPosition();
      window.addEventListener('resize', updateDropdownPosition);
    }

    return () => window.removeEventListener('resize', updateDropdownPosition);
  }, [isOpen]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange({ target: { name, value: option.value } });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(filter.toLowerCase())
  );

  const handleClickOutside = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const currentOption = filteredOptions[highlightedIndex];
          if (currentOption) {
            handleOptionClick(currentOption);
          }
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex(prev => Math.min(prev + 1, filteredOptions.length - 1));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className="relative inline-block w-full"
      ref={selectRef}
      onKeyDown={handleKeyDown}
    >
      <input type="hidden" name={name} id={name} value={selectedOption ? selectedOption.value : ''} />
      <div
        tabIndex={0} // Enable tab navigation
        role="select"
        className={`rounded-lg flex-1 appearance-none w-full py-2 px-4 border cursor-pointer flex items-center justify-between ${isOpen ? 'ring-adn-color-primary-light border-adn-color-primary-light ring-1 bg-adn-color-control-bg-active' : 'border-adn-color-border-light'} focus:outline-none focus:ring-1 focus:ring-adn-color-primary-light focus:border-adn-color-primary-light bg-adn-color-control-bg focus:bg-adn-color-control-bg-active`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${selectedOption ? '' : 'placeholder-adn-color-text-placeholder'}`}>{selectedOption ? selectedOption.label : placeholder}</span>
        <HiChevronDown className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200 ${isOpen ? 'text-zinc-500' : 'text-zinc-500'}`} />
      </div>
      {isOpen && (
        <div
          className={`absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg ${dropdownPosition === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'}`}
        >
          {customDropdown ? (
            customDropdown({ handleOptionClick, filter, setFilter: handleFilterChange })
          ) : (
            <div>
              <div className="p-2 border-b">
                <Input
                  type="text"
                  className="!bg-adn-color-fill-bg-lighter"
                  placeholder="Filter options..."
                  value={filter}
                  onChange={handleFilterChange}
                />
              </div>
              {filteredOptions.map((option, index) => (
                <div
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer ${index === highlightedIndex ? 'bg-adn-color-fill-bg' : 'hover:bg-adn-color-fill-bg-dark'}`}
                  onClick={() => handleOptionClick(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {option.label}
                </div>
              ))}
              <div className="p-2 border-t">
                <button
                  className="w-full btn"
                  onClick={() => alert('Custom button clicked')}
                >
                  Custom Button
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
