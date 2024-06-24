import { formatDate, formatNumber } from "../utils/formatters";
import { angle2str } from "../utils/formatAngle";
import Angle from "./Angle";

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
    <div className="flex flex-row items-baseline gap-4 my-5">
      <span className="w-12 font-semibold text-xs sm:text-sm">{props.label}</span>
      <div className="adn-color-fill-bg-dark rounded-lg px-3 py-1">
        {(props.type == 'angle') 
          ? <Angle value={value} format={props.format} /> 
          : <data title={props.value} className={`${props.bold && "font-semibold"}`} value={props.value} suppressHydrationWarning>{value}</data>
        }
        {props.error && <span> ± {(props.type == 'angle') ? <Angle value={error} format={props.format} /> : <data title={props.error} value={props.error} suppressHydrationWarning>{error}</data>}</span>}
      </div>      
    </div>
  )
}