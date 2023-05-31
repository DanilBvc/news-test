import { articleResponseType } from '../../globalTypes/globalTypes';

export const initialUserArticleState: {
  pinnedMessage: articleResponseType | null;
  articles: articleResponseType[] | [];
} = {
  pinnedMessage: null,
  articles: [],
};
