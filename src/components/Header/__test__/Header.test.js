import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render <Header/> with title prop', () => {
	render(<Header title='Todo' />);

	const headingElement = screen.getByText('Todo');

	expect(headingElement).toBeInTheDocument();
});
