import { articleResponseType } from '../../globalTypes/globalTypes';
import { articleActions } from './actionTypes';

const loadGlobalArticlesAction = (payload: {
  article: articleResponseType[] | articleResponseType;
}) => ({
  type: articleActions.LOAD_GLOBAL_ARTICLES,
  payload,
});
export default loadGlobalArticlesAction;
