import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
	return (
		<BrowserRouter>
			<Todo />
		</BrowserRouter>
	);
};

const addTasks = (tasks) => {
	const inputElement = screen.getByPlaceholderText('Add a new task here...');
	const buttonElement = screen.getByRole('button', { name: 'Add' });

	tasks.forEach((task) => {
		fireEvent.change(inputElement, { target: { value: task } });
		fireEvent.click(buttonElement);
	});
};

describe('<Todo/>', () => {
	it('should add Todo with the text that was input', () => {
		render(<MockTodo />);

		const inputElement = screen.getByPlaceholderText('Add a new task here...');
		const buttonElement = screen.getByRole('button', { name: 'Add' });

		fireEvent.change(inputElement, { target: { value: 'Test' } });
		fireEvent.click(buttonElement);

		const divElement = screen.getByText('Test');

		expect(divElement).toBeInTheDocument();
	});

	it('should render multiple Todo items', () => {
		render(<MockTodo />);

		addTasks(['Test 1', 'Test2', 'Test3']);

		const elements = screen.getAllByTestId('task-container');

		expect(elements.length).toBe(3);
	});

	it('should not have completed class when initially rendered', () => {
		render(<MockTodo />);

		addTasks(['Test 1']);

		const inputElement = screen.getByText('Test 1');

		expect(inputElement).not.toHaveClass('todo-item-active');
	});

	it('should have completed class when clicked', () => {
		render(<MockTodo />);

		addTasks(['Test 1']);

		const inputElement = screen.getByText('Test 1');

		fireEvent.click(inputElement);

		expect(inputElement).toHaveClass('todo-item-active');
	});
});
