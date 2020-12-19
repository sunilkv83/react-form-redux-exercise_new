import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {screeningReducer} from '../reducers/screeningReducer'

const reducer = combineReducers({
  form: reduxFormReducer, 
  sr:screeningReducer,
});

const defaultConfig = undefined;
const data = [];

var initialState = {config: defaultConfig, customData: data};

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer,initialState);

export default store;
