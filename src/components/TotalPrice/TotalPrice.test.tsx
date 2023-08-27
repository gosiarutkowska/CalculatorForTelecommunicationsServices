import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TotalPrice from './TotalPrice'; //

describe('TotalPrice Component', () => {
    it('should not display total price when totalPrice is null', () => {
        const { container } = render(<TotalPrice totalPrice={null} />);
        const textContent = container.querySelector('.total-price-wrapper')?.textContent;
        expect(textContent).toBe('');
    });
});
