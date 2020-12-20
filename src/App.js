import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import "./index.css";
import MovieList from "./components/MovieList";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <MovieList />
      </div>
    </Provider>
  );
}

export default App;
