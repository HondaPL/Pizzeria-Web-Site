import Home from '../../../components/pages/Home'
import { render } from '@testing-library/react'
import * as React from 'react'
import '@testing-library/jest-dom'

describe('Home tests', () => {
    it('Does render', () => {
        render(
            <Home />
        );
    });
})