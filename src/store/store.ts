import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import userArticleReducer from './reducers/articleReducer';
import globalArticleReducer from './reducers/globalArticleReducer';

const rootReducer = combineReducers({
  userArticleReducer,
  globalArticleReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
