import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
	return (
		<BrowserRouter>
			<FollowersList />
		</BrowserRouter>
	);
};

describe('<FollowersList/>', () => {
	beforeEach(() => {
		console.log('Before Each');
	});

	beforeAll(() => {
		console.log('After All');
	});

	afterEach(() => {
		console.log('Before Each');
	});

	afterAll(() => {
		console.log('After All');
	});

	it('should render list of followers', async () => {
		render(<MockFollowersList />);

		const followerDivElement = await screen.findByTestId('follower-item-0');

		expect(followerDivElement).toBeInTheDocument();
	});

	it('should render list of 5 followers', async () => {
		render(<MockFollowersList />);

		const followerDivElements = await screen.findAllByTestId(/follower-item/i);

		expect(followerDivElements.length).toBe(5);
	});
});
