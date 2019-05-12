import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';

// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension';


// Import the state interface and our combined reducers.
import { ApplicationState, reducers } from './store';

const configureStore = (): Store<ApplicationState> => {
    // create the composing function for our middlewares
    const composeEnhancers = composeWithDevTools({
        // options like actionSanitizer, stateSanitizer
    });

    // We'll create our store with the combined reducers and the initial Redux state that
    // we'll be passing from our entry point.
    return createStore<ApplicationState, any, any, any>(
        reducers,
        composeEnhancers(
            applyMiddleware(thunkMiddleware)
            // other store enhancers if any
        )
    )
}

export default configureStore;