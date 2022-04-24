import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import "./styles.scss";
import {createMockDB} from '../src/adapters/mockDB';
import ContextProvider from './context/ContextProvider';

createMockDB();
ReactDOM.render(
  <ContextProvider>
    <App />,
  </ContextProvider>,
  document.getElementById('root')
);
