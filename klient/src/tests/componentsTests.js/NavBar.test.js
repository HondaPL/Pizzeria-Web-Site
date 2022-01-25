import NavBar from '../../components/NavBar'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AllReducers from '../../redux/reducers/index'
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom'

describe('NavBar tests', () => {
    it('Does render', () => {
        const store = createStore(
            AllReducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

        render(
            <Provider store={store}>
                <Router>
                    <NavBar />
                </Router>
            </Provider>
        );


        expect(screen.getByText(/HOME/i)).toBeInTheDocument()
        expect(screen.getByText(/HOME/i)).toHaveClass('navbar-item')
        expect(screen.getByText(/HOME/i)).toContainHTML('<a class="navbar-item" href="/">HOME</a>')

        expect(screen.getByText(/PIZZA/i)).toBeInTheDocument()
        expect(screen.getByText(/PIZZA/i)).toHaveClass('navbar-item')
        expect(screen.getByText(/PIZZA/i)).toContainHTML('<a class="navbar-item" href="/pizzas">PIZZA</a>')

        expect(screen.getByText(/SAUCES/i)).toBeInTheDocument()
        expect(screen.getByText(/SAUCES/i)).toHaveClass('navbar-item')
        expect(screen.getByText(/SAUCES/i)).toContainHTML('<a class="navbar-item" href="/sauces">SAUCES</a>')

        expect(screen.getByText(/ORDER/i)).toBeInTheDocument()
        expect(screen.getByText(/ORDER/i)).toHaveClass('navbar-item')
        expect(screen.getByText(/ORDER/i)).toContainHTML(`<a class="navbar-item" href="/order">ORDER 0 zł</a>`)

        store.dispatch({
            type: 'ADD_TO_ORDER',
            data: 2,
        })

        expect(screen.getByText(/ORDER/i)).toContainHTML(`<a class="navbar-item" href="/order">ORDER 2 zł</a>`)

        store.dispatch({
            type: 'REMOVE_FROM_ORDER',
            data: 2,
        })

        expect(screen.getByText(/ORDER/i)).toContainHTML(`<a class="navbar-item" href="/order">ORDER 0 zł</a>`)

    });
})