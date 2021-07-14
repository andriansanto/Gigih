  const ImgComponent= (items) => {
    console.log(items.url);
  return (
        <img src={items.items.url} alt="giphy gif"/>
  );
}

export default ImgComponent;
