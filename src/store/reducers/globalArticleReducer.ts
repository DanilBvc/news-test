import { articleActions } from './../actions/actionTypes';
import { articleResponseType } from './../../globalTypes/globalTypes';
import { initialGlobalArticleState } from '../initialState/initialState';

const globalArticleReducer = (
  state = initialGlobalArticleState,
  action: {
    type: string;
    payload: articleResponseType[] | articleResponseType;
  }
): typeof initialGlobalArticleState => {
  switch (action.type) {
    case articleActions.LOAD_GLOBAL_ARTICLES: {
      const payload = action.payload;
      if (Array.isArray(payload)) {
        return [...state, ...payload];
      }
      return [...state, payload];
    }

    default:
      return state;
  }
};

export default globalArticleReducer;
