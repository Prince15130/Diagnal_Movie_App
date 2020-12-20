import axios from "axios";

/* export const getMovieList = () => {
  return API("get", `/movie/?offset=0&limit=807`);
  // return API("get", `/API/CONTENTLISTINGPAGE-PAGE1.json`);
};

export const loadMoreMovieList = (limit) => {
  return API("get", `/movie/?offset=${limit}&limit=20`);
}; */

export async function getMovieList() {
  const response = await axios.get(`/API/CONTENTLISTINGPAGE-PAGE1.json`);
  return response.data;
}

export async function loadMoreMovieList(page) {
  if (page < 4) {
    const response = await axios.get(
      `/API/CONTENTLISTINGPAGE-PAGE${page}.json`
    );
    return response.data;
  }
}
