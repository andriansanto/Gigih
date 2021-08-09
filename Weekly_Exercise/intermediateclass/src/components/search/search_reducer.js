
function searchReducer(state = '', action){
    switch (action.type) {
        case "search-track":
            return console.log('test');
        default:
            return state;
    }
}
export default searchReducer;