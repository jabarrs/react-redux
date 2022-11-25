import counterReducer from './Features/Counter/reducer';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

let rootReducers = combineReducers({
  counter: counterReducer,
});

const composeEnhancer = window.REDUX_DEVTOOL_EXTENTION_COMPOSE || compose;
let store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
