export default function TagList(props) {

  return (
    <>
      <ul className="m-0 inline-flex items-center flex-wrap justify-center gap-x-2 gap-y-3">{ props.children }</ul>
    </>
  );
}
