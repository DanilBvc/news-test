import { articleResponseType } from '../../globalTypes/globalTypes';
import { mockArticles } from '../../mockData/mockArticles';

export const initialUserArticleState: {
  pinnedMessage: articleResponseType | null;
  articles: articleResponseType[] | [];
} = {
  pinnedMessage: null,
  articles: mockArticles,
};
export const initialGlobalArticleState: articleResponseType[] | [] = [];
