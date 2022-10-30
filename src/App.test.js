import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';

test('landing on a 404', () => {
  const badRoute = '/anything/'

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )

  expect(screen.getByText(/Page Not Found!/i)).toBeInTheDocument()
});

