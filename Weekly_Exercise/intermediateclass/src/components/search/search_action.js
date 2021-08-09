import {createStore} from 'react-redux'
const store = createStore(todos, ['Use Redux'])

function searchAction(){
    return{
        type: 'search-track',
        payload: ''
    }
}

export default searchAction;