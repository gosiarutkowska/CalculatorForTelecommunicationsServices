import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectYear from './SelectYear';

describe('SelectYear component', () => {
    it('should call handleYearChange function when year is changed', () => {
        const mockHandleYearChange = jest.fn();
        const years = ['2023', '2024', '2025'];
        const selectedYear = '2023';
        const { getByLabelText } = render(<SelectYear years={years} selectedYear={selectedYear} handleYearChange={mockHandleYearChange} />);

        fireEvent.change(getByLabelText('Wybierz rok usług'), { target: { value: '2024' } });
        expect(mockHandleYearChange).toHaveBeenCalledTimes(1);
    });
});
