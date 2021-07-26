// import React, { useEffect,useState } from "react";

    
function Search(props){
        return(
            <>
            <form onSubmit={props.onSubmit}>
                <input type="text" onChange={props.onChange}/>
                <button type="submit">Search</button>
            </form>
            </>
        );

}

export default Search;