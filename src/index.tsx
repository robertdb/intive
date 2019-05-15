import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
    }
    body {
        max-width: 100rem;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0;
        line-height: 1.4;
    }
`;


const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

