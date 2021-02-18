// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from "./reducers";

// //export default createStore(rootReducer,applyMiddleware(thunk));


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const configureStore = (preloadedState = {})=> {
  const middlewares = [thunk];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
}

export default configureStore;
//export  { configureStore as default }

