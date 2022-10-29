import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('header contains app title', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/taskboard/i);
});

test('header contains home link that links to home', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const homeLink = screen.getByRole('link', {name: 'Home'});
    
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/task-board/');
});
