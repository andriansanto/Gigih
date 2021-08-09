import React, { useEffect,useState } from "react";
import logo from './logo.svg';
import './App.css';
import Search from "./components/Search";
import Gif from "./components/Gif";

const api= process.env.REACT_APP_GIPHY_KEY;

console.log(process.env.REACT_APP_GIPHY_KEY);

function App() {

  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");


const getSearch = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}&limit=6`
    )
    .then((response) => response.json());
    setResult(response.data);
};

const handleSubmit = (e:any) => {
  e.preventDefault()
  getSearch();
}

  return (
    <>
    {/* Search */}
      {/* <form >
          <input type="text" onChange={(e:any) => {setSearch(e.target.value)}}
                onSubmit={() => {handleSubmit({})}}/>
          <button type="submit">Search</button>
      </form>

      <div>
      <h6>Title</h6>
      <img/>
      </div> */}

      <Search
      onChange={(e:any) => {setSearch(e.target.value)}}
      onSubmit={handleSubmit}
      search={{search}}
      >
      </Search>
      {result.map((gif:any, i) => {
        return(
          <Gif
          key={i} title={gif.title} url={gif.images.original.url}></Gif>
        );
      })
      }
      
    </>
    
  );
}

export default App;
