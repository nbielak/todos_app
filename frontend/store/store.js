import rootReducer from '../reducers/root_reducer';
import logger from "redux-logger";
import {createStore, applyMiddleware} from 'redux';

const middleWares = [logger];
const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(...middleWares))
);

export default configureStore;