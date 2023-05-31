import { articleActions } from './../actions/actionTypes';
import { articleResponseType } from './../../globalTypes/globalTypes';
import { initialUserArticleState } from '../initialState/initialState';

const userArticleReducer = (
  state = initialUserArticleState,
  action: {
    type: string;
    payload: {
      article: articleResponseType[] | articleResponseType;
    };
  }
): typeof initialUserArticleState => {
  switch (action.type) {
    case articleActions.LOAD_ARTICLES: {
      const payload = action.payload.article;
      if (Array.isArray(payload)) {
        return {
          ...state,
          articles: [...state.articles, ...payload],
        };
      }
      return {
        ...state,
        articles: [...state.articles, payload],
      };
    }
    case articleActions.PIN_ARTICLE: {
      const payload = action.payload.article;
      if (Array.isArray(payload)) {
        return state;
      }
      return {
        ...state,
        pinnedMessage: payload,
        articles: state.articles.filter((article) => article !== payload),
      };
    }
    case articleActions.REMOVE_ARTICLE: {
      const payload = action.payload.article;
      if (Array.isArray(payload)) {
        return state;
      }
      if (state.pinnedMessage && state.pinnedMessage === payload) {
        return {
          ...state,
          articles: state.articles.filter((article) => article !== payload),
          pinnedMessage: null,
        };
      }
      return {
        ...state,
        articles: state.articles.filter((article) => article !== payload),
      };
    }

    default:
      return state;
  }
};

export default userArticleReducer;
