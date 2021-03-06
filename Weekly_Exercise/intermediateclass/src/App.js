import './App.css';
import Search from './components/search/index_search';
import Gif from './components/gif/gif';
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const api= process.env.REACT_APP_GIPHY_KEY;

console.log(process.env.REACT_APP_GIPHY_KEY);
    
function App(){

    const [result, setResult] = useState([]);
    const [search, setSearch] = useState("");
    
    const search_text = useSelector(state => state.search_text)
    const dispatch = useDispatch()


    useEffect(() => {
        getSearch(search);
    })
    

    const getSearch = async () => {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}&limit=6`
        )
        .then((response) => response.json());
        setResult(response.data);
    };

    const handleSubmit = e => {
        e.preventDefault()
        getSearch();
    }
        return(
            <>
            <div>
                {/* <input value={search} type="text" onChange={(e) => {setSearch(e.target.value)}}/>
                <button onClick={() => {getSearch()}}>Search</button> */}
                <Search 
                onChange={(e) => {setSearch(e.target.value)}}
                onSubmit={() => {handleSubmit()}}
                search={{search}}
                ></Search>
                {result.map((gif, i) => {
                    return (
                    <Gif key={i} title={gif.title} url={gif.images.original.url}/>
                    );
                })
                }
            </div>
            </>
        );
}


export default App;
