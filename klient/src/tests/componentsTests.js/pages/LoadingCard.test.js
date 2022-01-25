import LoadingCard from '../../../components/pages/LoadingCard'
import { render } from '@testing-library/react'
import * as React from 'react'
import '@testing-library/jest-dom'

describe('LoadingCard tests', () => {
    it('Does render', () => {
        render(
            <LoadingCard />
        );
    });
})