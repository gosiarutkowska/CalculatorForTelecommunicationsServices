import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Telecommunications Services Calculator', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('should render the main header', () => {
    const headerElement = screen.getByText(/Kalkulator usług telekomunikacyjnych/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('should render the year selection dropdown', () => {
    const selectElement = screen.getByText(/Wybierz rok usług/i);
    expect(selectElement).toBeInTheDocument();
  });

  test('should render the services selection section', () => {
    const serviceSelectionHeader = screen.getByText(/Wybierz usługi, którymi się interesujesz/i);
    expect(serviceSelectionHeader).toBeInTheDocument();
  });

  test('should render the calculate button', () => {
    const buttonElement = screen.getByRole('button', { name: /Oblicz wartość usług/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
