export default function Tag(props) {
    
  var tagClass = "";
  switch (props.children) {
    case 'Transient':
      tagClass = "bg-adn-color-tag-amber";
      break;
    case 'Optical':
      tagClass = "bg-adn-color-tag-purple";
      break;
    case 'Gamma-Ray Burst':
      tagClass = "bg-adn-color-tag-emerald";
      break;
    case 'Wide-Field Instrument':
      tagClass = "bg-adn-color-tag-sky";
      break;
    default:
      tagClass = "bg-adn-color-tag-zinc";
  }

  return (
    <>
      <li className={`list-none m-0 px-[0.8em] py-[0.1em] text-nowrap text-adn-color-text-active text-center text-[0.78rem] font-medium rounded-full ${props.className} ${tagClass}`}>{ props.children }</li>
    </>
  );
}
