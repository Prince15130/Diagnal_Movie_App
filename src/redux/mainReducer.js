import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import movieListReducer from "./modules/movieList";

const rootReducer = combineReducers({
  filterReducer,
  movieListReducer,
});

export default rootReducer;
