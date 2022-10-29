import { screen, render } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import TaskNewForm from './TaskNewForm';
import userEvent from '@testing-library/user-event';

test('add button is disabled intially', () => {
    render(<BrowserRouter><TaskNewForm onAddTaskHandler = {()=>{}}/></BrowserRouter>);

    const addButton = screen.getByRole('button', {name: 'Add'});
    expect(addButton).toBeDisabled();
});

test('button is enabled when user type in name & deadline fields', async () => {
    const user = userEvent.setup();
    render(<BrowserRouter><TaskNewForm onAddTaskHandler = {()=>{}}/></BrowserRouter>);

    const addButton = screen.getByRole('button', {name: 'Add'});
    const nameTextbox = screen.getByRole('textbox', {name: 'Title'});
    const deadlineTextbox = screen.getByRole('textbox', {name: 'Deadline'});

    await user.type(nameTextbox, 'test task title');
    await user.type(deadlineTextbox, '12/12/2022');

    expect(addButton).toBeEnabled();
});

test('cancel button url', () => {
    render(<BrowserRouter><TaskNewForm onAddTaskHandler = {()=>{}}/></BrowserRouter>);
    expect(screen.getByRole('link', {name: 'Cancel'})).toHaveAttribute('href', '/');
});

