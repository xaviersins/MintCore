// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MintCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MintCore/i);
    expect(titleElement).toBeInTheDocument();
});
