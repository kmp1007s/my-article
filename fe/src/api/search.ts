import axios from "axios";

const server = process.env.REACT_APP_SERVER;
console.log(server);

export function searchNews(query: String) {
  return axios.get(`${server}/search/articles?query=${query}`);
}

export function searchPedia(query: String) {
  return axios.get(`${server}/search/pedia?query=${query}`);
}
