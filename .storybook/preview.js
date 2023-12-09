import '../src/index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './../src/hok/AuthProvider';

/** @type { import('@storybook/react').Preview } */
import './../src/index.css';

const fakeUseAuth = () => ({
	currentUser: {
		id: 0,
		// Другие поля currentUser
	},
});

const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<BrowserRouter>
				<AuthProvider useAuth={fakeUseAuth}>
					<Story />
				</AuthProvider>
			</BrowserRouter>
		),
	],
};

export default preview;
