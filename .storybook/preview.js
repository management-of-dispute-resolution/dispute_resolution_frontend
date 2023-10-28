import '../src/index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/** @type { import('@storybook/react').Preview } */
import './../src/index.css';
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
				<Story />
			</BrowserRouter>
		),
	],
};

export default preview;
