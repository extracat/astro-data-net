import { formatDate, formatNumber } from "../utils/formatters";
import { angle2str } from "../utils/formatAngle";

export default function DataBlock(props) {

  let value = "";
  let error = "";

  if (props.value) {
    switch (props.type) {
      case 'number':
        value = formatNumber(props.value);
        break;
      case 'date':
        value = formatDate(props.value);
        break;
      case 'angle':
        value = angle2str(props.value, props.format);
        value = String(value)
          .replace(/([a-zA-Z]+)/g, "<sup>$1</sup>") // Wrap all letters in <sup>
          .split(' ') // Split by spaces to process each part separately
          .map((part, index) => <span key={index} dangerouslySetInnerHTML={{ __html: part }} />)
          .reduce((prev, curr) => [prev, ' ', curr]); // Putting it back together by adding spaces


        break;
      default:
        value = props.value;
    }
  }

  if (props.error) {   
    switch (props.type) {
      case 'number':
        error = formatNumber(props.error);
        break;
      case 'date':
        error = formatDate(props.error);
        break;
      case 'angle':
        error = props.error;
        error = String(error)
        .replace(/([a-zA-Z]+)/g, "<sup>$1</sup>") // Wrap all letters in <sup>
        .split(' ') // Split by spaces to process each part separately
        .map((part, index) => <span key={index} dangerouslySetInnerHTML={{ __html: part }} />)
        .reduce((prev, curr) => [prev, ' ', curr]); // Putting it back together by adding spaces

        break;
      default:
        error = props.error;
    }
  }


  return (
    <div className="flex flex-row items-baseline gap-1 my-5">
      <span className="w-12 font-semibold text-xs sm:text-sm">{props.label}</span>
      <div className="adn-color-fill-bg-dark rounded-lg px-3 py-1">
        <data title={props.value} className={`${props.bold && "font-semibold"}`} value={props.value}>{value}</data>
        {props.error && <data title={props.error}  value={props.error}> ± {error}</data>}
      </div>      
    </div>
  )
}