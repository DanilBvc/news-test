import { getCurrentTimeForApi } from './dateHelpers';

const apiKey = '11088acefe544a60b9f7bac47589e262';
export const baseUrl = 'https://newsapi.org/v2/everything';
export const newsUrl = (searchQuery = 'Apple', date = '2023-05-29') =>
  `${baseUrl}?q=${searchQuery}&from=${date}&sortBy=popularity&apiKey=${apiKey}`;
export const freeshNewsUrl = `https://newsapi.org/v2/everything?q=Apple&from=${getCurrentTimeForApi()}&sortBy=popularity&apiKey=${apiKey}`;
