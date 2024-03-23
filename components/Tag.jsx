export default function Tag(props) {
    
  var tagClass = "";
  switch (props.children) {
    case 'Transient':
      tagClass = "bg-adn-light-tag-amber dark:bg-adn-dark-tag-amber";
      break;
    case 'Optical':
      tagClass = "bg-adn-light-tag-purple dark:bg-adn-dark-tag-purple";
      break;
    case 'Gamma-Ray Burst':
      tagClass = "bg-adn-light-tag-emerald dark:bg-adn-dark-tag-emerald";
      break;
    case 'Wide-Field Instrument':
      tagClass = "bg-adn-light-tag-sky dark:bg-adn-dark-tag-sky";
      break;
    default:
      tagClass = "bg-adn-light-tag-zinc dark:bg-adn-dark-tag-zinc";
  }

  return (
    <>
      <li className={`list-none m-0 px-[0.8em] py-[0.1em] text-nowrap adn-color-text-active text-center text-[0.78rem] font-medium rounded-full ${props.className} ${tagClass}`}>{ props.children }</li>
    </>
  );
}
