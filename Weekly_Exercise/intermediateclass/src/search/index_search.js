import React, { Component } from "react";
import Gif from "../gif/gif";

const api= process.env.REACT_APP_GIPHY_KEY;

console.log(process.env.REACT_APP_GIPHY_KEY);
    
class Search extends Component{
    state = {
        search: "",
        data: [],
    };
    
    handleSearch = (e) => {
        this.setState({ search: e.target.value });
    }

    getSearch = () => {
        fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${this.state.search}&limit=6`
        )
        .then((response) => response.json())
        .then((response) => {
            this.setState({ data: response.data });
        });
    };
    


    render(){
        return(
            <>
            <div>
                <input type="text" onChange={(e) => {this.handleSearch(e)}}/>
                <button onClick={this.getSearch}>Search</button>
                {this.state.data?.map((gif, i) => {
                    return (
                    <Gif key={i} title={gif.title} url={gif.images.original.url}/>
                    );
                })
                }
            </div>
            </>
        );
    }
}

export default Search;