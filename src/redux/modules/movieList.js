import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getPokemonList,
  loadMorePokemonList,
} from "../../api/pokemonEndpoints";

// Actions types
const FETCH_POKEMON_LIST = "pokemon-frontend/pokemon/FETCH_POKEMON_LIST";
const FETCH_POKEMON_LIST_SUCCESS =
  "pokemon-frontend/pokemon/FETCH_POKEMON_LIST_SUCCESS";
const FETCH_POKEMON_LIST_FAILURE =
  "pokemon-frontend/pokemon/FETCH_POKEMON_LIST_FAILURE";
const DISPLAY_MORE_BEGIN = "pokemon-frontend/pokemon/DISPLAY_MORE_BEGIN";
const DISPLAY_MORE_END = "pokemon-frontend/pokemon/DISPLAY_MORE_END";
const LOAD_MORE_POKEMON_SUCCEED =
  "pokemon-frontend/pokemon/LOAD_MORE_POKEMON_SUCCEED";
const LOAD_MORE_POKEMON_FAILED =
  "pokemon-frontend/pokemon/LOAD_MORE_POKEMON_FAILED";
const LOAD_MORE_POKEMON = "pokemon-frontend/pokemon/LOAD_MORE_POKEMON";
const SEARCH_POKEMON = "pokemon-frontend/pokemon/SEARCH_POKEMON";

const initialState = { pokemonList: [], isLoading: false, error: "" };

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_POKEMON_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POKEMON_LIST_SUCCESS:
      const results = action.payload.page.items.content;
      const pokemonResultsList = results.map((pokemon) => {
        // const id = parseInt(getId(pokemon.url), 10);
        const id = pokemon.name;
        return { id, ...pokemon };
      });
      return {
        ...state,
        pokemonList: pokemonResultsList,
        isLoading: false,
      };
    case FETCH_POKEMON_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case DISPLAY_MORE_BEGIN:
      return {
        ...state,
        isLoading: false,
      };
    case DISPLAY_MORE_END:
      return {
        ...state,
        isLoading: false,
      };
    case LOAD_MORE_POKEMON:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_MORE_POKEMON_SUCCEED:
      const newPokemonList = action.payload.page.items.content.map(
        (pokemon) => {
          const id = pokemon.name;
          return { id, ...pokemon };
        }
      );
      const { pokemonList } = state;
      return {
        ...state,
        pokemonList: [...pokemonList, ...newPokemonList],
        isLoading: false,
      };
    case LOAD_MORE_POKEMON_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SEARCH_POKEMON:
      const { pokemonListfilter } = state;
      const copyList = [...state.pokemonList];
      console.log(action.payload);
      const filterData = copyList.filter((list) =>
        list.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        pokemonList: filterData,
        isLoading: false,
      };
    default:
      return state;
  }
}

// Action Creators
export function loadPokemonList(payload) {
  return { type: FETCH_POKEMON_LIST, payload };
}

export function loadPokemonListSucceed(payload) {
  return { type: FETCH_POKEMON_LIST_SUCCESS, payload };
}

export function loadPokemonListFailed(payload) {
  return { type: FETCH_POKEMON_LIST_FAILURE, payload };
}

export function displayMorePokemon(payload) {
  return { type: DISPLAY_MORE_BEGIN, payload };
}

export function displayMorePokemonEnd() {
  return { type: DISPLAY_MORE_END };
}
export function loadMorePokemonSucceed(payload) {
  return { type: LOAD_MORE_POKEMON_SUCCEED, payload };
}

export function loadMorePokemonFailed(payload) {
  return { type: LOAD_MORE_POKEMON_FAILED, payload };
}

export function loadMorePokemon(payload) {
  return { type: LOAD_MORE_POKEMON, payload };
}
export function searchPokemon(payload) {
  return { type: SEARCH_POKEMON, payload };
}

export function* fetchPokemonListSaga() {
  try {
    const response = yield call(getPokemonList, 0);
    //console.table(response);
    yield put(loadPokemonListSucceed(response));
  } catch (error) {
    yield put(loadPokemonListFailed(error.message));
  }
}

function* displayMorePokemonSaga(action) {
  const { payload } = action;
  try {
    const response = yield call(loadMorePokemonList, payload + 1);
    yield delay(1000);
    yield put(loadMorePokemonSucceed(response));
  } catch (error) {
    yield put(loadMorePokemonFailed(error.message));
  }
}

function* searchPokemonSaga(action) {
  const searchResponse = yield call(searchPokemon, action.payload);
  yield delay(1000);
  yield put(loadPokemonListSucceed(searchResponse));
}

export function* pokemonListWatcherSaga() {
  yield takeLatest(FETCH_POKEMON_LIST, fetchPokemonListSaga);
  yield takeEvery(LOAD_MORE_POKEMON, displayMorePokemonSaga);
  //yield takeEvery(SEARCH_POKEMON, searchPokemonSaga);
}
