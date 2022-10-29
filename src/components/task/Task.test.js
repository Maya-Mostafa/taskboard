import { screen, render } from  '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Task } from './Task';

test('task data is displayed', () => {
    render(
        <BrowserRouter>
            <Task colName='Todo' details={{name: 'test task1', deadline: '10/12/2022', description: 'this is the task description'}} />
        </BrowserRouter>
    );

    jest.mock('moment', () => {
        const mockMoment = {
          format: jest.fn().mockReturnThis(),
          valueOf: jest.fn()
        };
        return jest.fn(() => mockMoment);
    });

    expect(screen.getByText(/Todo/i)).toBeInTheDocument();
    expect(screen.getByText(/test task1/i)).toBeInTheDocument();
    expect(screen.getByText(/10\/12\/2022/i)).toBeInTheDocument();
    expect(screen.getByText(/this is the task description/i)).toBeInTheDocument();
});

test('back button url', () => {
    render(
        <BrowserRouter>
            <Task colName='Todo' details={{name: 'test task1', deadline: '10/12/2022', description: 'this is the task description'}} />
        </BrowserRouter>
    );

    jest.mock('moment', () => {
        const mockMoment = {
          format: jest.fn().mockReturnThis(),
        };
        return jest.fn(() => mockMoment);
    });

    expect(screen.getByRole('link', {name: 'Back'})).toHaveAttribute('href', '/');

});