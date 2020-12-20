import {
  loadMovieList,
  displayMoreMovie,
  loadMoreMovie,
  searchMovie,
  movieListFilterSelector,
  movieListCount,
} from "../redux/modules/movieList";
import _ from "lodash";
import "../index.css";
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ListItemLoader from "./ListItemLoader";
import MovieListItem from "./MovieListItem";
import { getId } from "../helpers/movieUtils";

class MovieList extends Component {
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
    const { isLoading, error, movieList } = this.props;
    // const {  } = this.state;
    // console.log("State===" + movieList);
    // console.log(this.props.movieList);
    if (_.isEmpty(movieList) && isLoading) return <ListItemLoader />;
    //console.table(movieList); /*check with verma */
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
          {_.isEmpty(movieList) && <p>No results for this search</p>}
          {movieList.map((movie) => {
            const { id, posterimage } = movie;
            return (
              <div
                key={movie.url}
                className="justify-items-center justify-center"
              >
                <MovieListItem id={id} name={posterimage} />
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
  movieList: state.movieListReducer.movieList,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchActionCreator: loadMovieList,
      loadMoreActionCreator: loadMoreMovie,
      searchActionCreator: searchMovie,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
