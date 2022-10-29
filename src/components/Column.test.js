import {screen, render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Column from './Column';

test('tasks and their headings are displayed', () => {
    render(
		<BrowserRouter>
			<Column
				colName='Todo'
				tasks={[
                    { name: "task1", deadline: "12/10/2022", description: "test description 1"}, 
                    { name: "task2", deadline: "12/12/2022", description: "test description 2"}]}
			/>
		</BrowserRouter>
	);

    const tasks = screen.getAllByRole('listitem');
    expect(tasks).toHaveLength(2);

    const tasksHeadings = screen.getAllByRole('heading', {level: 6});
    const names = tasksHeadings.map(heading => heading.textContent);
    expect(names).toEqual(['task1', 'task2']);

    // const tasksDeadlines = screen.getAllByRole('label', {name: 'dueDate'});
    // const deadlines = tasksDeadlines.map(deadline => deadline.textContent);
    // expect(deadlines).toEqual(['12/10/2022', '12/12/2022']);

});

test('tasks buttons displayed for each card', () => {
    render(
		<BrowserRouter>
			<Column
				colName='Todo'
				tasks={[
                    { name: "task1", deadline: "12/12/2022", description: "test description"}, 
                    { name: "task2", deadline: "12/12/2022", description: "test description"}]}
			/>
		</BrowserRouter>
	);

    const viewButtons = screen.getAllByRole('link', {name: 'View'});
    expect(viewButtons).toHaveLength(2);

    const editButtons = screen.getAllByRole('link', {name: 'Edit'});
    expect(editButtons).toHaveLength(2);

});

test('add button url', () => {
    render(
        <BrowserRouter>
			<Column
				colName='Todo'
				tasks={[
                    { name: "task1", deadline: "12/12/2022", description: "test description"}, 
                    { name: "task2", deadline: "12/12/2022", description: "test description"}]}
			/>
		</BrowserRouter>
    );

    expect(screen.getByRole('link', {name: 'Add Task'})).toHaveAttribute('href', '/Todo/tasks/new-task/');
});
