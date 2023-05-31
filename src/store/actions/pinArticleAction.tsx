import { articleResponseType } from '../../globalTypes/globalTypes';
import { articleActions } from './actionTypes';

const pinArticleAction = (payload: {
  article: articleResponseType[] | articleResponseType;
  sortBy?: null | string;
}) => ({
  type: articleActions.PIN_ARTICLE,
  payload,
});
export default pinArticleAction;
