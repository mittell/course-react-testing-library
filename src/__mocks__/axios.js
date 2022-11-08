/* eslint-disable import/no-anonymous-default-export */
const mockResponse = {
	data: {
		results: [
			{
				id: {
					value: 0,
				},
				name: {
					first: 'Test',
					last: 'Name',
				},
				picture: {
					large: '',
				},
				login: {
					username: 'TestUser1',
				},
			},
			{
				name: {
					first: 'Test',
					last: 'Name',
				},
				picture: {
					large: '',
				},
				login: {
					username: 'TestUser2',
				},
			},
			{
				name: {
					first: 'Test',
					last: 'Name',
				},
				picture: {
					large: '',
				},
				login: {
					username: 'TestUser3',
				},
			},
			{
				name: {
					first: 'Test',
					last: 'Name',
				},
				picture: {
					large: '',
				},
				login: {
					username: 'TestUser4',
				},
			},
			{
				name: {
					first: 'Test',
					last: 'Name',
				},
				picture: {
					large: '',
				},
				login: {
					username: 'TestUser5',
				},
			},
		],
	},
};

export default {
	get: jest.fn().mockResolvedValue(mockResponse),
};
