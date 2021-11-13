import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import "./styles.scss";
import {createMockDB} from '../src/adapters/mockDB';

createMockDB();
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
