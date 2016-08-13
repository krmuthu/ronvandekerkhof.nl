import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { isDebug } from '<common/utilities>/environment';
import thunk from 'redux-thunk';
import rootReducer from '<common/reducers>';
import reduxLoggerMiddleware from '<common/middlewares>/reduxLoggerMiddleware';

export function configureStore(initialState, history) {
    const middleware = [thunk, routerMiddleware(history)];

    if (isDebug()) {
        middleware.push(reduxLoggerMiddleware);
    }

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware),
        typeof window === 'object' &&
        typeof window.devToolsExtension !== 'undefined' ?
            window.devToolsExtension() : f => f
    ));

    return store;
}
