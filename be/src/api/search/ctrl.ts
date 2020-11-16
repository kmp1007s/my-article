import { asyncWrapper } from '@lib/async';
import { SearchResult as ArticleSearchResult } from 'types/naver/article';
import { SearchResult as PediaSearchResult } from 'types/naver/pedia';
import { request } from '@lib/axios';

export const searchArticles = asyncWrapper(async (req, res) => {
  console.log(req.query);

  const { query } = req.query;

  if (query) {
    const encodedQuery = encodeURI(query.toString());

    const response = await request<undefined, ArticleSearchResult>({
      method: 'GET',
      url: `https://openapi.naver.com/v1/search/news.json?query=${encodedQuery}`,
      useNaver: true,
    });

    if (response) res.status(200).json(response.data.items);
  }
});

export const searchPedia = asyncWrapper(async (req, res) => {
  console.log(req.query);

  const { query } = req.query;

  if (query) {
    const encodedQuery = encodeURI(query.toString());

    const response = await request<undefined, PediaSearchResult>({
      method: 'GET',
      url: `https://openapi.naver.com/v1/search/encyc.json?query=${encodedQuery}`,
      useNaver: true,
    });

    if (response) res.status(200).json(response.data.items);
  }
});
