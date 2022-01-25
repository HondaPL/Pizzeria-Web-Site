import React from 'react';
import './components/styles/App.scss';
import ReactDOM from 'react-dom';
import App from './components/App';
import Form from './components/Form';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AllReducers from './redux/reducers';
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Form />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') || document.createElement('div') //For testing
);
