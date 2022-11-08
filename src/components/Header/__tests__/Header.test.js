import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('GetBy Tests', () => {
	it('should render <Header/> with title prop', () => {
		render(<Header title='Todo' />);

		const headingElement = screen.getByText('Todo');

		expect(headingElement).toBeInTheDocument();
	});

	it('should render <Header/> and header element with title "Todo"', () => {
		render(<Header title='Todo' />);

		const headingElement = screen.getByRole('heading', { name: 'Todo' });

		expect(headingElement).toBeInTheDocument();
	});

	it('should render <Header/> and header element with title "Cat"', () => {
		render(<Header title='Todo' />);

		const headingElement = screen.getByTitle('Cat');

		expect(headingElement).toBeInTheDocument();
	});

	it('should render <Header/> and header element with testid "header-1"', () => {
		render(<Header title='Todo' />);

		const headingElement = screen.getByTestId('header-1');

		expect(headingElement).toBeInTheDocument();
	});
});

describe('FindBy Tests', () => {
	it('should render <Header/> with title prop', async () => {
		render(<Header title='Todo' />);

		const headingElement = await screen.findByText('Todo');

		expect(headingElement).toBeInTheDocument();
	});
});

describe('QueryBy Tests', () => {
	it('should render <Header/> with title prop', () => {
		render(<Header title='Todo' />);

		const headingElement = screen.queryByText('Test');

		expect(headingElement).not.toBeInTheDocument();
	});
});

describe('GetAllBy Tests', () => {
	it('should render <Header/> and all header elements', () => {
		render(<Header title='Todo' />);

		const headingElements = screen.getAllByRole('heading');

		expect(headingElements.length).toBe(2);
	});
});
