import express from 'express';
import search from './search';
import article from './article';

const api = express.Router();

api.use('/search', search);
api.use('/articles', article);

export default api;
