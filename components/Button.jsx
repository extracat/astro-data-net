import React from 'react';

const Button = ({ 
  type = 'button',
  variant = 'default',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  icon = null,
  iconPosition = 'left',
  rightIcon = null,
  children,
  ...props
}) => {
  const isIconOnly = (icon || rightIcon) && !children && !loading;
  const hasIconAndText = (icon || rightIcon) && children && !loading;

  const baseStyles = 'inline-flex items-center justify-center text-sm text-center font-semibold cursor-pointer no-underline disabled:bg-adn-color-primary-lighter disabled:border-opacity-0 disabled:bg-opacity-20 disabled:shadow-none disabled:cursor-default';
  
  const variants = {
    primary: 'bg-adn-color-primary text-white hover:bg-adn-color-primary-light active:bg-adn-color-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-adn-color-primary-light focus:ring-offset-adn-color-fill-bg',
    default: 'border border-adn-color-border-light hover:bg-adn-color-fill-bg-dark  focus:outline-none focus:border-adn-color-primary-light focus:ring-1 focus:ring-offset-0 focus:ring-adn-color-primary-light focus:ring-offset-adn-color-fill-bg',
    blank: 'hover:bg-adn-color-fill-bg-dark  focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-adn-color-primary-light focus:ring-offset-adn-color-fill-bg'
  };

  const sizes = {
    sm: `${isIconOnly ? 'w-10 h-10' : hasIconAndText ? 
      (iconPosition === 'left' ? 'pl-4 pr-5' : 'pl-5 pr-4') : 
      'px-3'} py-1.5 text-sm rounded-full gap-1.5 min-h-10`,
    md: `${isIconOnly ? 'w-12 h-12' : hasIconAndText ? 
      (iconPosition === 'left' ? 'pl-5 pr-6' : 'pl-6 pr-5') : 
      'px-6'} py-2 text-base rounded-full gap-2 min-h-12`,
    lg: `${isIconOnly ? 'w-16 h-16' : hasIconAndText ? 
      (iconPosition === 'left' ? 'pl-6 pr-8' : 'pl-8 pr-6') : 
      'px-6'} py-3 text-lg rounded-full gap-2.5 min-h-16`
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const variantStyle = variants[variant];
  const sizeStyle = sizes[size];
  const iconSize = iconSizes[size];

  const renderIcon = (iconComponent) => {
    return iconComponent && React.cloneElement(iconComponent, {
      className: `${iconSize} ${iconComponent.props.className || ''}`
    });
  };

  return (
    <button
      type={type}
      tabIndex={0}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <svg 
            className={`animate-spin ${iconSize}`}
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && renderIcon(icon)}
          {children}
          {(rightIcon || (icon && iconPosition === 'right')) && 
            renderIcon(rightIcon || icon)}
        </>
      )}
    </button>
  );
};

export default Button;