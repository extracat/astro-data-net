import { angle2str } from "../utils/formatAngle";

export default function Angle(props) {

  let value = "";

  if (props.value) {
    value = angle2str(props.value, props.format);
    value = String(value)
      .replace(/([a-zA-Z]+)/g, "<sup>$1</sup>") // Wrap all letters in <sup>
      .split(' ') // Split by spaces to process each part separately
      .map((part, index) => <span key={index} dangerouslySetInnerHTML={{ __html: part }} />)
      .reduce((prev, curr) => [prev, ' ', curr]); // Putting it back together by adding spaces
    }
  
  return (
    <data title={props.value} className={`${props.className}`} value={props.value}>{value}</data>
  )
}