import {configureStore} from "@reduxjs/toolkit"

import searchReducer from "./search_reducer"

export default configureStore({
    reducer:{
        search: searchReducer,

    }
});