import App from '../../components/App'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AllReducers from '../../redux/reducers/index'
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom'

describe('App tests', () => {
    it('Does render', () => {
        const store = createStore(
            AllReducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

        render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );
    });
})