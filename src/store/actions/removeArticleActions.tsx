import { articleResponseType } from '../../globalTypes/globalTypes';
import { articleActions } from './actionTypes';

const removeArticleAction = (payload: {
  article: articleResponseType[] | articleResponseType;
  sortBy: null | string;
}) => ({
  type: articleActions.REMOVE_ARTICLE,
  payload,
});
export default removeArticleAction;
