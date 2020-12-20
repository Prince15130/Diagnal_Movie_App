import axios from "axios";

/* export const getPokemonList = () => {
  return API("get", `/pokemon/?offset=0&limit=807`);
  // return API("get", `/API/CONTENTLISTINGPAGE-PAGE1.json`);
};

export const loadMorePokemonList = (limit) => {
  return API("get", `/pokemon/?offset=${limit}&limit=20`);
}; */

export async function getPokemonList() {
  const response = await axios.get(`/API/CONTENTLISTINGPAGE-PAGE1.json`);
  return response.data;
}

export async function loadMorePokemonList(page) {
  if (page < 4) {
    const response = await axios.get(
      `/API/CONTENTLISTINGPAGE-PAGE${page}.json`
    );
    return response.data;
  }
}
