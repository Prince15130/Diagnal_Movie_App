import React from "react";

const PokemonListItem = ({ id, name }) => {
  return (
    <>
      <img src={`/Slices/${name}`} alt={id} />

      <p className="text-center text-white">{id}</p>
    </>
  );
};

export default PokemonListItem;
