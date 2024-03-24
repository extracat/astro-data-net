function hours2hms(decimalHours) {
  const totalSeconds = Math.abs(decimalHours) * 3600.;

  const hours = Math.floor(totalSeconds / 3600.);
  const minutes = Math.floor((totalSeconds % 3600.) / 60.);
  const seconds = totalSeconds % 60.;

  const sign = decimalHours < 0. ? -1. : 1.;

  const timeHMS = [sign, hours, minutes, seconds];

  return timeHMS;
}

function deg2HMS(degValue) {
   return hours2hms(degValue / 15.);
}

function deg2DMS(degValue) {
  return hours2hms(degValue);
}

function deg2RAD(degValue) {
  return degValue * Math.PI / 180.;
}

function deg2DEG(degValue) {
  return degValue;
}

///////////////////////////////////
// Parse deg float number from text
// Possible notations:
// 1h 1m 1.1s
// 1h 1′ 1.1″
// +15d 15m 16.5s
// +15° 15′ 16.5″
// etc...
const str2deg = (timeString) => {
  let cTimeString = timeString.replace(/[\(\):hmrad\u00b0\u2032\u2035\u02b9\']/gi, ' ');
  cTimeString = cTimeString.replace(/[\u2033\u2036\u02ba\"s]/gi, '');

  let matches;

  let decimalVal;
  if (matches = cTimeString.match(/^\s*([+-])?\s*(\d{1,3})\s+(\d{1,2})\s+(\d{1,2}(?:\.\d+)?)\s*$/)) { //DMS or HMS
      const sign = matches[1] === '-' ? -1. : 1.;
      const hour = parseInt(matches[2], 10);
      const min = parseInt(matches[3], 10);
      const sec = parseFloat(matches[4]);
      decimalVal = sign * (sec / 3600. + min / 60. + hour)
      if (/h/.test(timeString)) { // It's HMS format
          decimalVal = decimalVal * 15.;
      }
  } else if (matches = cTimeString.match(/^\s*([+-]?\s*\d{1,3}(:?\.\d+)?)\s*$/)) { // decimal number
      decimalVal = parseFloat(matches[1].replace(/\s+/g, ''));
      if (/h/.test(timeString)) { // It's hours
          decimalVal = decimalVal * 15.;
      } else if (/r/.test(timeString)) { // It's radians
          decimalVal = decimalVal * 180. / Math.PI;
      }
  } else {
      console.log(timeString);
      throw new Error('I don\'t know how to parse this');
  }
  return decimalVal;
}

/////////////////////////////////////
// Render text from deg float number
// Formats:
// HMS: 1h 1m 1.1s
// DMS: +15° 15′ 16.5″
// DEG: 15.254583°
// RAD: 0.26624271rad
// (!) precision mesured in arcsec
const deg2str = (degValue, format, precision = 1) => {
  const maxPrec = 15;
  let prec = Math.min(precision < 0 ? maxPrec : Math.floor(precision), 15);
  let res;
  if (format.toUpperCase() === 'DMS') {
      const val = deg2DMS(degValue);
      res = val[0] < 0 ? '-' : '+';
      res += val[1].toFixed() + '\u00b0 ';
      res += (val[2] < 10 ? '0' : '') + val[2].toFixed() + '\u2032 ';
      res += (val[3] < 10 ? '0' : '') + parseFloat(val[3].toFixed(prec)) + '\u2033';
  } else if (format.toUpperCase() === 'HMS') {
      prec += 1;
      const val = deg2HMS(degValue);
      res = val[0] < 0 ? '-' : '';
      res += val[1].toFixed() + 'h ';
      res += (val[2] < 10 ? '0' : '') + val[2].toFixed() + 'm ';
      res += (val[3] < 10 ? '0' : '') + parseFloat(val[3].toFixed(prec)) + 's';
  } else if (format.toUpperCase() === 'DEG') {
      prec += 4;
      const val = deg2DEG(degValue);
      res = parseFloat(val.toFixed(prec)) + '\u00b0';
  } else if (format.toUpperCase() === 'RAD') {
      prec += 6;
      const val = deg2RAD(degValue);
      res = parseFloat(val.toFixed(prec)) + 'rad';
  } else {
      throw new Error('I don\'t know this format');
  }
  return res;
}

// Render text from any format (float or string)
const angle2str = (angle, format, precision = 1) => {
  if (typeof angle === 'string') {
    return deg2str(str2deg(angle), format, precision)
    
  } else if (typeof angle === 'number') {
    return deg2str(angle, format, precision)
    
  } else {
    throw new Error('Unsupported var type');
  }
}


export { angle2str, deg2str, str2deg };