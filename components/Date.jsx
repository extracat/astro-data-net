import { formatDate, formatDateDifference, formatDateDifferenceInSeconds, getDateDifference } from "../utils/formatDate";

export default function Date(props) {

  let value = "";
  let dateDifference = null;
  let formatOptions = null;

  switch (props.format) {
    case "DT":
      formatOptions = {
        dateStyle: 'medium',
        timeStyle: 'long',
        hour12: false,
        timeZone: 'UTC',
      }
      break;

    case "T":
      formatOptions = { 
        hour: 'numeric', 
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'UTC',
      }
      break;
  
    default:
      break;
  }

  
  if (props.value) value = formatDate(props.value, formatOptions);

  if (props.t0) {
      if (props.diff) {
        value = formatDateDifferenceInSeconds(props.value, props.t0);
      } else {
        dateDifference = getDateDifference(props.value, props.t0);
      }
  }




  return (
    <time suppressHydrationWarning title={props.value} className={`${props.className}`} datetime={props.value}>{value}{dateDifference > 0 && <sup>+{dateDifference}</sup>}</time>
  )
}