import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ServiceCheckboxes from './ServiceCheckboxes';

describe('ServiceCheckboxes component', () => {
    const mockHandleServiceChange = jest.fn();

    const mockServices = [
        { name: 'Internet', prices: {}, required: [] },
        { name: 'Telewizja', prices: {}, required: [] },
        { name: 'Dekoder 4K', prices: {}, required: ['Telewizja'] },
    ];

    it('should call handleServiceChange when checkbox is clicked', () => {
        const { getByLabelText } = render(<ServiceCheckboxes services={mockServices} selectedServices={[]} handleServiceChange={mockHandleServiceChange} />);

        fireEvent.click(getByLabelText('Internet'));
        expect(mockHandleServiceChange).toHaveBeenCalledWith('Internet');
    });

    it('should disable checkbox if required services are not selected', () => {
        const { getByLabelText } = render(<ServiceCheckboxes services={mockServices} selectedServices={[]} handleServiceChange={mockHandleServiceChange} />);

        expect(getByLabelText('Dekoder 4K')).toBeDisabled();
    });

    it('should display tooltip if checkbox is disabled', () => {
        const { getByLabelText } = render(<ServiceCheckboxes services={mockServices} selectedServices={[]} handleServiceChange={mockHandleServiceChange} />);

        expect(getByLabelText('Dekoder 4K').parentNode).toHaveAttribute('title', 'Wymagana dodatkowa usługa:' +
            ' Telewizja');
    });
});
