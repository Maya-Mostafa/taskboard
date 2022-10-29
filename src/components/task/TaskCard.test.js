import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TaskCard from './TaskCard';
import userEvent from '@testing-library/user-event';

test('card data is displayed', () => {
    render(
        <BrowserRouter>
            <TaskCard 
                col='Todo'
                taskInfo = {{name: 'test task1', deadline: '10/12/2022', description: 'this is the task description'}}
                deleteClickHandler = {() => {}}
            />
        </BrowserRouter>
    );

    jest.mock('moment', () => {
        const mockMoment = {
          format: jest.fn().mockReturnThis(),
          valueOf: jest.fn()
        };
        return jest.fn(() => mockMoment);
    });

    expect(screen.getByText(/test task1/i)).toBeInTheDocument();
    expect(screen.getByText(/10\/12\/2022/i)).toBeInTheDocument();
});

test('view and edit buttons urls', () => {
    render(
        <BrowserRouter>
            <TaskCard 
                col='Todo'
                taskInfo = {{name: 'test task1', deadline: '10/12/2022', description: 'this is the task description'}}
                deleteClickHandler = {() => {}}
            />
        </BrowserRouter>
    );

    jest.mock('moment', () => {
        const mockMoment = {
          format: jest.fn().mockReturnThis(),
        };
        return jest.fn(() => mockMoment);
    });

    expect(screen.getByRole('link', {name: 'View'})).toHaveAttribute('href', '/Todo/tasks/task-details/test task1/');
    expect(screen.getByRole('link', {name: 'Edit'})).toHaveAttribute('href', '/Todo/tasks/edit-task/test task1/');
});

test('"delete" button opens dialog and "No" button closes it', async () => {
    render(
        <BrowserRouter>
            <TaskCard 
                col='Todo'
                taskInfo = {{name: 'test task1', deadline: '10/12/2022', description: 'this is the task description'}}
                deleteClickHandler = {() => {}}
            />
        </BrowserRouter>
    );

    jest.mock('moment', () => {
        const mockMoment = {
          format: jest.fn().mockReturnThis(),
        };
        return jest.fn(() => mockMoment);
    });

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', {name: 'Delete'}));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.click(screen.getByRole('button', {name: 'No'}));
    await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));

});