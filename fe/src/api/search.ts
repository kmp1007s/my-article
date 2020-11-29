import axios from "axios";

const server = process.env.REACT_APP_SERVER;

export type Article = {
  description: string;
  link: string;
  originallink: string;
  pubDate: string;
  title: string;
};

export type Pedia = {
  description: string;
  link: string;
  thumbnail: string;
  title: string;
};

export function searchArticles(query: String) {
  return axios.get<Array<Article>>(`${server}/search/articles?query=${query}`);
}

export function searchPedia(query: String) {
  return axios.get<Array<Pedia>>(`${server}/search/pedia?query=${query}`);
}
