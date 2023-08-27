import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CalculateButton from './CalculateButton';

describe('CalculateButton component', () => {
    it('should call calculateTotal function when clicked', () => {
        const mockCalculateTotal = jest.fn();
        const { getByText } = render(<CalculateButton calculateTotal={mockCalculateTotal} />);
        fireEvent.click(getByText('Oblicz wartość usług'));
        expect(mockCalculateTotal).toHaveBeenCalledTimes(1);
    });
});
