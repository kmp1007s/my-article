import axios from "axios";

const server = process.env.REACT_APP_SERVER;

export type Article = {
    title: string;
    link: string;
}

export type ArticleDoc = Article & {
    _id: string;
};

export function saveArticle(data: Article) {
    return axios.post<ArticleDoc>(`${server}/articles`, data);
}

export function getArticles() {
    return axios.get<Array<ArticleDoc>>(`${server}/articles`);
}