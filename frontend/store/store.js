import rootReducer from '../reducers/root_reducer';
import logger from "redux-logger";
import {createStore, applyMiddleware} from 'redux';

const middleWares = [logger];
const configureStore = (preloadedState = {}) => {

    if (window.localStorage.todos) {
        preloadedState = {todos: JSON.parse(window.localStorage.todos)};
    }

    let store = createStore(rootReducer, preloadedState, applyMiddleware(...middleWares));
    
    store.subscribe(() => {
        window.localStorage.setItem(
          "todos",
          JSON.stringify(store.getState().todos)
        );
    })
    
    return store;
};

export default configureStore;