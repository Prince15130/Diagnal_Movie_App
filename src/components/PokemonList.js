import {
  loadPokemonList,
  displayMorePokemon,
  loadMorePokemon,
  searchPokemon,
  pokemonListFilterSelector,
  pokemonListCount,
} from "../redux/modules/movieList";
import _ from "lodash";
import "../index.css";
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ListItemLoader from "./ListItemLoader";
import PokemonListItem from "./PokemonListItem";
import { getId } from "../helpers/pokemonUtils";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 1,
    };
  }
  componentDidMount() {
    const { fetchActionCreator } = this.props;
    fetchActionCreator();
  }

  handleScroll = (event) => {
    console.log("scroll" + event.target);
    const { loadMoreActionCreator } = this.props;
    const { currentCount } = this.state;
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (currentCount < 3) {
        loadMoreActionCreator(currentCount);
        this.setState({
          currentCount: currentCount + 1,
        });
      }
    }
  };

  search = (event) => {
    const { searchActionCreator } = this.props;
    if (event.target.value.length !== 0) {
      searchActionCreator(event.target.value);
    } else {
      this.props.fetchActionCreator();
    }
  };
  render() {
    const { isLoading, error, pokemonList } = this.props;
    // const {  } = this.state;
    // console.log("State===" + pokemonList);
    // console.log(this.props.pokemonList);
    if (_.isEmpty(pokemonList) && isLoading) return <ListItemLoader />;
    //console.table(pokemonList); /*check with verma */
    if (error) return <p>Error</p>;
    return (
      <>
        <div className="bg-black flex justify-between p-1">
          <input
            type="text"
            className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2"
            onChange={this.search}
          ></input>
          <img
            src="/Slices/search.png"
            style={{ height: "2rem", width: "2rem" }}
            className="m-1"
          />
        </div>
        <div
          className="grid grid-cols-3 gap-4 justify-items-center justify-center bg-black p-1"
          onScroll={this.handleScroll}
          style={{ height: "50rem", overflow: "auto" }}
        >
          {_.isEmpty(pokemonList) && <p>No results for this search</p>}
          {pokemonList.map((pokemon) => {
            const { id, posterimage } = pokemon;
            return (
              <div
                key={pokemon.url}
                className="justify-items-center justify-center"
              >
                <PokemonListItem id={id} name={posterimage} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.movieListReducer.isLoading,
  error: state.movieListReducer.error,
  pokemonList: state.movieListReducer.pokemonList,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchActionCreator: loadPokemonList,
      loadMoreActionCreator: loadMorePokemon,
      searchActionCreator: searchPokemon,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
