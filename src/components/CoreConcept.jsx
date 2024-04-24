function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.descreption}</p>
    </li>
  );
}
export default CoreConcept;
