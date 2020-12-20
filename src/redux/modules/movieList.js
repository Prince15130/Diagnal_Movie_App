import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getMovieList, loadMoreMovieList } from "../../api/movieEndpoints";

// Actions types
const FETCH_MOVIE_LIST = "movie-frontend/movie/FETCH_MOVIE_LIST";
const FETCH_MOVIE_LIST_SUCCESS =
  "movie-frontend/movie/FETCH_MOVIE_LIST_SUCCESS";
const FETCH_MOVIE_LIST_FAILURE =
  "movie-frontend/movie/FETCH_MOVIE_LIST_FAILURE";
const DISPLAY_MORE_BEGIN = "movie-frontend/movie/DISPLAY_MORE_BEGIN";
const DISPLAY_MORE_END = "movie-frontend/movie/DISPLAY_MORE_END";
const LOAD_MORE_MOVIE_SUCCEED = "movie-frontend/movie/LOAD_MORE_MOVIE_SUCCEED";
const LOAD_MORE_MOVIE_FAILED = "movie-frontend/movie/LOAD_MORE_MOVIE_FAILED";
const LOAD_MORE_MOVIE = "movie-frontend/movie/LOAD_MORE_MOVIE";
const SEARCH_MOVIE = "movie-frontend/movie/SEARCH_MOVIE";

const initialState = { movieList: [], isLoading: false, error: "" };

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_MOVIE_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_MOVIE_LIST_SUCCESS:
      const results = action.payload.page.items.content;
      const movieResultsList = results.map((movie) => {
        // const id = parseInt(getId(movie.url), 10);
        const id = movie.name;
        return { id, ...movie };
      });
      return {
        ...state,
        movieList: movieResultsList,
        isLoading: false,
      };
    case FETCH_MOVIE_LIST_FAILURE:
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
    case LOAD_MORE_MOVIE:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_MORE_MOVIE_SUCCEED:
      const newMovieList = action.payload.page.items.content.map((movie) => {
        const id = movie.name;
        return { id, ...movie };
      });
      const { movieList } = state;
      return {
        ...state,
        movieList: [...movieList, ...newMovieList],
        isLoading: false,
      };
    case LOAD_MORE_MOVIE_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SEARCH_MOVIE:
      const { movieListfilter } = state;
      const copyList = [...state.movieList];
      console.log(action.payload);
      const filterData = copyList.filter((list) =>
        list.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        movieList: filterData,
        isLoading: false,
      };
    default:
      return state;
  }
}

// Action Creators
export function loadMovieList(payload) {
  return { type: FETCH_MOVIE_LIST, payload };
}

export function loadMovieListSucceed(payload) {
  return { type: FETCH_MOVIE_LIST_SUCCESS, payload };
}

export function loadMovieListFailed(payload) {
  return { type: FETCH_MOVIE_LIST_FAILURE, payload };
}

export function displayMoreMovie(payload) {
  return { type: DISPLAY_MORE_BEGIN, payload };
}

export function displayMoreMovieEnd() {
  return { type: DISPLAY_MORE_END };
}
export function loadMoreMovieSucceed(payload) {
  return { type: LOAD_MORE_MOVIE_SUCCEED, payload };
}

export function loadMoreMovieFailed(payload) {
  return { type: LOAD_MORE_MOVIE_FAILED, payload };
}

export function loadMoreMovie(payload) {
  return { type: LOAD_MORE_MOVIE, payload };
}
export function searchMovie(payload) {
  return { type: SEARCH_MOVIE, payload };
}

export function* fetchMovieListSaga() {
  try {
    const response = yield call(getMovieList, 0);
    //console.table(response);
    yield put(loadMovieListSucceed(response));
  } catch (error) {
    yield put(loadMovieListFailed(error.message));
  }
}

function* displayMoreMovieSaga(action) {
  const { payload } = action;
  try {
    const response = yield call(loadMoreMovieList, payload + 1);
    yield delay(1000);
    yield put(loadMoreMovieSucceed(response));
  } catch (error) {
    yield put(loadMoreMovieFailed(error.message));
  }
}

function* searchMovieSaga(action) {
  const searchResponse = yield call(searchMovie, action.payload);
  yield delay(1000);
  yield put(loadMovieListSucceed(searchResponse));
}

export function* movieListWatcherSaga() {
  yield takeLatest(FETCH_MOVIE_LIST, fetchMovieListSaga);
  yield takeEvery(LOAD_MORE_MOVIE, displayMoreMovieSaga);
  //yield takeEvery(SEARCH_MOVIE, searchMovieSaga);
}
