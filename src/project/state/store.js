import Constants from 'config/constants';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { TrendsReducer } from './entities/trends';
import { PageHomeReducer } from './entities/page_home';

export const Store = () => {
  const reducers = combineReducers({
    PageHome: PageHomeReducer,
    Trends: TrendsReducer,
  });
  var store;
  if(Constants.DEBUG){
    store = createStore(reducers,applyMiddleware(thunk, logger));        
  } else {
    store = createStore(reducers,applyMiddleware(thunk));        
  }

  return store;
};