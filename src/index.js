import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./components/app/app";
import rootReducer from "./store/root-reducer";
import createAPI from "./services/api";
import {checkAuth} from "./store/api-actions";
import {requireAuth} from "./store/action";
import {AuthorizationStatus} from "./const";

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(createAPI(
            () => store.dispatch(requireAuth(AuthorizationStatus.NO_AUTH))
        )))
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
