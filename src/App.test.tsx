import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  it('renders the main application without crashing', () => {
    // We wrap App in BrowserRouter because App likely contains Routes, 
    // but looking at typical setup, App might already contain BrowserRouter.
    // If App contains BrowserRouter, wrapping it again might cause issues or be redundant, 
    // but usually App *is* the router. Let's just render App.
    render(<App />);
    
    // Check if the Chatbot widget renders (it sits outside Suspense boundaries)
    const logoElement = screen.getByAltText(/Chatbot Toggle/i);
    expect(logoElement).toBeInTheDocument();
  });
});
