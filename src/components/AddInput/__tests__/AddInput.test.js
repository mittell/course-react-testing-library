import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetToDo = jest.fn();

describe('<AddInput/>', () => {
	it('should render input element', () => {
		render(<AddInput todos={[]} setTodos={mockedSetToDo} />);

		const inputElement = screen.getByPlaceholderText('Add a new task here...');

		expect(inputElement).toBeInTheDocument();
	});

	it('should be able to type into input', () => {
		render(<AddInput todos={[]} setTodos={mockedSetToDo} />);

		const inputElement = screen.getByPlaceholderText('Add a new task here...');

		fireEvent.change(inputElement, { target: { value: 'Go Shopping' } });

		expect(inputElement.value).toBe('Go Shopping');
	});

	it('should have empty input when add button is clicked', () => {
		render(<AddInput todos={[]} setTodos={mockedSetToDo} />);

		const inputElement = screen.getByPlaceholderText('Add a new task here...');
		const buttonElement = screen.getByRole('button');

		fireEvent.change(inputElement, { target: { value: 'Go Shopping' } });
		fireEvent.click(buttonElement);

		expect(inputElement.value).toBe('');
	});
});
