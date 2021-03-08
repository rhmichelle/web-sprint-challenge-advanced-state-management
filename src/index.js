import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore  } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducers/index';
import "./index.css";
import App from "./App";

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger));

const { worker } = require('./mocks/browser');
worker.start();


const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);

