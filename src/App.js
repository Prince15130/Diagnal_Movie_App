import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import "./index.css";
import PokemonList from "./components/PokemonList";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <PokemonList />
      </div>
    </Provider>
  );
}

export default App;
