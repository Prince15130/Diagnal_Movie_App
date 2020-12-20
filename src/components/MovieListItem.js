import React from "react";

const MovieListItem = ({ id, name }) => {
  return (
    <>
      <img src={`/Slices/${name}`} alt={id} />

      <p className="text-center text-white">{id}</p>
    </>
  );
};

export default MovieListItem;
