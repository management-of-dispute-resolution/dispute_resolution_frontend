import { BrowserRouter } from 'react-router-dom';
import LinkReset from './LinkReset';

export default {
	title: 'Dispute_Resolution/Links/LinkReset',
	component: LinkReset,
};

const LinkFunction = (args) => (
	<BrowserRouter>
		<LinkReset {...args} />
	</BrowserRouter>
);

export const Default = LinkFunction.bind({});

Default.args = {
	label: 'Забыли пароль?',
	url: '/recovery-password',
};
