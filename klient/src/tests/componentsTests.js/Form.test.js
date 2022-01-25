import Form from '../../components/Form'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AllReducers from '../../redux/reducers/index'
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom'

describe('Form tests', () => {
    const store = createStore(
        AllReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    it('Does render', () => {


        render(
            <Provider store={store}>
                <Router>
                    <Form />
                </Router>
            </Provider>
        );

        expect(screen.getByText(/Order/i)).toBeInTheDocument()
        expect(screen.getByText(/First Name/i)).toBeInTheDocument()
        expect(screen.getByText(/Last Name/i)).toBeInTheDocument()
        expect(screen.getByText(/Email/i)).toBeInTheDocument()
        expect(screen.getByText(/Phone/i)).toBeInTheDocument()
        expect(screen.getByText(/Street Name/i)).toBeInTheDocument()
        expect(screen.getByText(/Apartment/i)).toBeInTheDocument()
        expect(screen.getByText(/Postcode/i)).toBeInTheDocument()
        expect(screen.getByText(/City/i)).toBeInTheDocument()
        expect(screen.queryByText(/myMail/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/pizza/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/sauces/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
        expect(screen.getByText(/Order/i)).toContainHTML('<p>Order</p>')

    })
}
)