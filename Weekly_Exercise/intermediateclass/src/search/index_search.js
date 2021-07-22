import React, { useEffect,useState } from "react";
import Gif from "../gif/gif";

const api= process.env.REACT_APP_GIPHY_KEY;

console.log(process.env.REACT_APP_GIPHY_KEY);
    
function Search(){

    const [result, setResult] = useState([]);
    const [search, setSearch] = useState("");
    
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
        return(
            <>
            <div>
                <input value={search} type="text" onChange={(e) => {setSearch(e.target.value)}}/>
                <button onClick={() => {getSearch()}}>Search</button>
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

export default Search;