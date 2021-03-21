import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./components/app/app";
import {reducer} from "./store/reducer";
import createAPI from "./services/api";

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
