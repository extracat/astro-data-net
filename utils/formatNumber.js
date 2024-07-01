const formatNumber = (number, formatOptions = undefined) => {
  
  let options = {
    style: "decimal",
    notation: "standard",
  }

  if (formatOptions != undefined) {
    options = formatOptions;
  }

  return new Intl.NumberFormat('en-US', options).format(number);
};

export { formatNumber };