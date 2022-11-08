import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
	return (
		<BrowserRouter>
			<TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
		</BrowserRouter>
	);
};

describe('<TodoFooter/>', () => {
	it('should render the correct amount of incomplete tasks', () => {
		render(<MockTodoFooter numberOfIncompleteTasks={5} />);

		const paragraphElement = screen.getByText('5 tasks left');

		expect(paragraphElement).toBeInTheDocument();
	});

	it('should render "task" when the number of incomplete tasks is 1', () => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);

		const paragraphElement = screen.getByText('1 task left');

		expect(paragraphElement).toBeInTheDocument();
	});

	it('should render a paragraph element', () => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);

		const paragraphElement = screen.getByText('1 task left');

		expect(paragraphElement).toContainHTML('p');
	});

	it('should render the correct text content', () => {
		render(<MockTodoFooter numberOfIncompleteTasks={5} />);

		const paragraphElement = screen.getByTestId('para');

		expect(paragraphElement).toHaveTextContent('5 tasks left');
	});

	it('should NOT render "task" when the number of incomplete tasks above 1', () => {
		render(<MockTodoFooter numberOfIncompleteTasks={2} />);

		const paragraphElement = screen.getByText('2 tasks left');

		expect(paragraphElement).not.toBeFalsy();
	});

	it('should render the correct amount of incomplete tasks as text', () => {
		render(<MockTodoFooter numberOfIncompleteTasks={5} />);

		const paragraphElement = screen.getByText('5 tasks left');

		expect(paragraphElement.textContent).toBe('5 tasks left');
	});
});
