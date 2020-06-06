 import { combineReducers,createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import loggingMiddleware from 'redux-logger';
import commentReducer from './redux/getComments';
import { ActionTypes } from './redux/reduxTypes';

const reducer = combineReducers({ comments: commentReducer });

export type AppState = ReturnType<typeof reducer>;

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        thunk as ThunkMiddleware<AppState, ActionTypes>,
        loggingMiddleware
    ))
);

export default store;