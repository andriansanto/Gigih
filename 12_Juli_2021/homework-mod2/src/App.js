import './App.css';
import ImgComponent from './components/img/img';
import TitleComponent from './components/title/title';
import gif from './components/data/apidata';

function App() {
  const LoopsData = gif.map((gif, index) => {
    if(gif.rating === "g"){
      return <div style={{
        margin: "5 5"
      }}>
        <TitleComponent key={index} items={gif}></TitleComponent>
        <ImgComponent key={index} items={gif}></ImgComponent>
      </div>
    }
    else{
      return console.log("Data Fetch not authorized");
      // <p key={index} style={{
      //   backgroundColor: "red",
      //   borderRadius: "10px"
      // }}>Data Fetch Not Authorized</p>
    }
  });


  return (
    <div className="App">
      <header>
        <div>
          <input type="search"></input>
          <button>Search</button>
        </div>
        <ul>
          {LoopsData}
        </ul>
      </header>
    </div>
  );
}

export default App;
