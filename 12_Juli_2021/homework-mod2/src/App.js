import './App.css';
import ImgComponent from './components/img/img';
import TitleComponent from './components/title/title';
import gif from './components/data/apidata';

function App() {
  const data = gif;
  console.log(data.title);

  return (
    <div className="App">
      <header>
        <div>
          <input type="search"></input>
          <button>Search</button>
        </div>
        <TitleComponent items={data}></TitleComponent>
        <ImgComponent items={data}></ImgComponent>
      </header>
    </div>
  );
}

export default App;
