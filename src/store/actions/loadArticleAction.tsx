import { articleResponseType } from '../../globalTypes/globalTypes';
import { articleActions } from './actionTypes';

const loadArticleAction = (payload: {
  article: articleResponseType[] | articleResponseType;
  sortBy?: null | string;
}) => ({
  type: articleActions.LOAD_ARTICLES,
  payload,
});
export default loadArticleAction;
