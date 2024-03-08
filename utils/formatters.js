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

const formatDate = (dateString, formatOptions = undefined) => {

  let options = {
    dateStyle: 'medium',
    timeStyle: 'long',
    hour12: false,
    timeZone: 'UTC',
  }

  if (formatOptions != undefined) {
    options = formatOptions;
  }

  //return new Date(dateString).toLocaleString(undefined, { timeZone: 'UTC' });
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
};

export { formatDate, formatNumber };