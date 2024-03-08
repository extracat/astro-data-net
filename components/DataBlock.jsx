import { formatDate, formatNumber } from "../utils/formatters";

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
      default:
        error = props.error;
    }
  }

  return (
    <div className="flex flex-row items-baseline gap-1 my-4">
      <span className="w-10 font-semibold text-sm">{props.label}</span>
      <div className="adn-color-fill-bg-dark rounded-lg px-3 py-1">
        <data className={`${props.bold && "font-semibold"}`} value={props.value}>{value}</data>
        {props.error && <data value={props.error}> ± {error}</data>}
      </div>      
    </div>
  )
}