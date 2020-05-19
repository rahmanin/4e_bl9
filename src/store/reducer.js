import { combineReducers } from "redux";
import favsReducer from "./favs/reducer";


const rootReducer = combineReducers({
  favs: favsReducer
});

export default rootReducer;
