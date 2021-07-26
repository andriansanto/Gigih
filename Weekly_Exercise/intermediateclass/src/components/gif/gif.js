const Gif = (props) => {
    return (
    <>
      <h6>{props.title}</h6>
      <img alt={props.title} src={props.url} />
    </>
    );
  }

export default Gif;