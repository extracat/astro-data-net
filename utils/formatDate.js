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

const formatDateDifference = (dateString1, dateString2) => {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  const diffInMilliseconds = date1 - date2;
  
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  if (Math.abs(diffInDays) > 0) {
    return rtf.format(diffInDays, 'day');
  } else if (Math.abs(diffInHours) > 0) {
    return rtf.format(diffInHours, 'hour');
  } else if (Math.abs(diffInMinutes) > 0) {
    return rtf.format(diffInMinutes, 'minute');
  } else {
    return rtf.format(diffInSeconds, 'second');
  }
};

const formatDateDifferenceInSeconds = (dateString1, dateString2, locale = 'en-US') => {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  const diffInMilliseconds = date1 - date2;
  
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  // Форматируем разницу в секундах
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  // Получаем строку формата
  let formattedString = rtf.format(diffInSeconds, 'second');
  
  // Обрабатываем строку, чтобы соответствовать требуемому формату
  formattedString = formattedString.replace(/^(in | ago )/, '').replace(' seconds', ' s').replace('now', '0');

  return formattedString;
};

const getDateDifference = (dateString1, dateString2) => {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  
  // Функция для установки нулевого времени в заданном часовом поясе
  const setZeroTimeInTimeZone = (date, timeZone) => {
    // Получаем текущий часовой пояс даты в часах относительно UTC
    const currentOffset = date.getTimezoneOffset() / -60;
    
    // Вычисляем разницу между текущим и целевым часовым поясом
    const offsetDifference = timeZone - currentOffset;
    
    // Корректируем дату на разницу часовых поясов
    const adjustedDate = new Date(date.getTime() + offsetDifference * 60 * 60 * 1000);
    
    // Устанавливаем нулевое время в UTC
    adjustedDate.setUTCHours(0, 0, 0, 0);
    
    // Возвращаем скорректированную дату
    return adjustedDate;
  };
  
  // Получаем часовой пояс для каждой из дат
  const timeZone1 = date1.getTimezoneOffset() / -60;
  const timeZone2 = date2.getTimezoneOffset() / -60;
  
  // Устанавливаем нулевое время в заданном часовом поясе для обеих дат
  const zeroTimeDate1 = setZeroTimeInTimeZone(date1, timeZone1);
  const zeroTimeDate2 = setZeroTimeInTimeZone(date2, timeZone2);
  
  // Разница в миллисекундах между датами
  const diffInMilliseconds = Math.abs(zeroTimeDate1 - zeroTimeDate2);

  // Количество миллисекунд в одном дне
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  // Вычисляем разницу в днях
  const diffInDays = Math.floor(diffInMilliseconds / millisecondsPerDay);

  return diffInDays;
};

export { formatDate, formatDateDifference, formatDateDifferenceInSeconds, getDateDifference };