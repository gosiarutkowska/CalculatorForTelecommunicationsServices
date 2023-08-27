import React from 'react';
import { render, screen } from '@testing-library/react';
import BestBundle from './BestBundle';

describe('BestBundle component', () => {
    it('should render nothing if bestBundle is null', () => {
        render(<BestBundle bestBundle={null} selectedYear="2023" totalPrice={100} />);
        expect(screen.queryByText(/Znaleźliśmy dla Ciebie tańsze rozwiązanie/)).toBeNull();
    });

    it('should render nothing if bestBundle is more expensive than totalPrice', () => {
        const mockBundle = {
            name: 'Mock Bundle',
            services: ['Internet'],
            prices: { '2023': 110 }
        };
        render(<BestBundle bestBundle={mockBundle} selectedYear="2023" totalPrice={100} />);
        expect(screen.queryByText(/Znaleźliśmy dla Ciebie tańsze rozwiązanie/)).toBeNull();
    });

    it('should render bestBundle information if bestBundle is cheaper than totalPrice', () => {
        const mockBundle = {
            name: 'Mock Bundle',
            services: ['Internet'],
            prices: { '2023': 90 }
        };
        render(<BestBundle bestBundle={mockBundle} selectedYear="2023" totalPrice={100} />);
        expect(screen.getByText(/Znaleźliśmy dla Ciebie tańsze rozwiązanie/)).toBeInTheDocument();

        const allMatchingElements = screen.getAllByText(/Mock Bundle/);
        expect(allMatchingElements[0]).toBeInTheDocument();

        expect(screen.getByText(/90 PLN/)).toBeInTheDocument();
    });
});
