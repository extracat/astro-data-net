import React from 'react';

export function DataBlockValue(props) {
  return <>{props.children}</>;
}

export function DataBlockError(props) {
  return <>{props.children}</>;
}

export default function DataBlock(props) {

  let value;
  let error;
  let content = [];

  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === DataBlockValue) {
      value = child;
    } else if (child.type === DataBlockError) {
      error = child;
    } else {
      content.push(child);
    }
  });


  return (
    <div className="flex flex-row items-baseline gap-4 my-5">
      <span className="w-12 font-semibold text-xs sm:text-sm">{props.label}</span>
      <div className="adn-color-fill-bg-dark rounded-lg px-3 py-1">
        {<span className={`${props.bold && "font-semibold"}`}>{value}</span>
        }
        {!!error && <span> ± {error}</span>}
      </div>      
    </div>
  )
}