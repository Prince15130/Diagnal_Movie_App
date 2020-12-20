import { all } from "redux-saga/effects";
import { pokemonListWatcherSaga } from "./modules/movieList";

export default function* rootSaga() {
  yield all([pokemonListWatcherSaga()]);
}
