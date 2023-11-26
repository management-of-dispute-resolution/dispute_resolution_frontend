import LinkApp from './LinkApp';

export default {
	title: 'Dispute_Resolution/LinkApp',
	component: LinkApp,
	tags: ['autodocs'],
};

const LinkFunction = (args) => (
		<LinkApp {...args} />
);

export const Default = LinkFunction.bind({});

Default.args = {
	label: 'Забыли пароль?',
	url: '/recovery-password',
};
