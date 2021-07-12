import '../../App.css';

function NewIndex() {
    const imgUrl = "https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif";
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="search"></input>
          <button>Search</button>
        </div>
        <img src={imgUrl} alt="giphy gif"/>
      </header>
    </div>
  );
}

export default NewIndex;
