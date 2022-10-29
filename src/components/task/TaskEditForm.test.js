import { screen, render } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import TaskEditForm from './TaskEditForm';
import userEvent from '@testing-library/user-event';

test('cancel button url', () => {
    render(
        <BrowserRouter>
            <TaskEditForm 
                details={{name: 'test task1', deadline: '10/12/2022', description: 'this is the task description'}}
                onUpdateTaskHandler = {()=>{}}/>
        </BrowserRouter>
    );
    expect(screen.getByRole('link', {name: 'Cancel'})).toHaveAttribute('href', '/');
});

test('data loaded correctly in the fields', () => {
    render(
        <BrowserRouter>
            <TaskEditForm 
                details={{name: 'test task1', deadline: '10/12/2022', description: 'this is the task description'}}
                onUpdateTaskHandler = {()=>{}}/>
        </BrowserRouter>
    );

    expect(screen.getByRole('textbox', {name: 'Title'})).toHaveValue('test task1');
    expect(screen.getByRole('textbox', {name: 'Deadline'})).toHaveValue('10/12/2022');
    expect(screen.getByRole('textbox', {name: 'Description'})).toHaveValue('this is the task description');
});

test('update button behavior', async () => {
    const user = userEvent.setup();

    render(
        <BrowserRouter>
            <TaskEditForm 
                details={{name: 'test task1', deadline: '10/12/2022', description: 'this is the task description'}}
                onUpdateTaskHandler = {()=>{}}/>
        </BrowserRouter>
    );

    const nameTextbox = screen.getByRole('textbox', {name: 'Title'});
    const deadlineTextbox = screen.getByRole('textbox', {name: 'Deadline'});
    const updateButton = screen.getByRole('button', {name: 'Update'});

    await user.type(nameTextbox, 'test task title');
    await user.type(deadlineTextbox, '12/12/2022');
    expect(updateButton).toBeEnabled();
});

test('update button behavior disabled', async () => {

    render(
        <BrowserRouter>
            <TaskEditForm 
                details={{name: '', deadline: '', description: 'this is the task description'}}
                onUpdateTaskHandler = {()=>{}}/>
        </BrowserRouter>
    );

    const updateButton = screen.getByRole('button', {name: 'Update'});
    expect(updateButton).toBeDisabled();
});