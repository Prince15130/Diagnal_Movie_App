import { all } from "redux-saga/effects";
import { movieListWatcherSaga } from "./modules/movieList";

export default function* rootSaga() {
  yield all([movieListWatcherSaga()]);
}
