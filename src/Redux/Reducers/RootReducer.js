import {combineReducers} from "redux"
import SearchResultReducer from "./SearchResultReducer"

export default combineReducers({
    options: SearchResultReducer,
})