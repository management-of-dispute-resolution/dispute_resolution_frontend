import Menu from './Menu';

export default {
	title: 'Dispute_Resolution/Menu',
	component: Menu,
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};
export const OpenedMenu = {
	args: {
		isOpen: false,
		firstButton: {
			size: 'small',
			label: 'Выйти',
			color: 'transperent',
			type: 'button',
			before: 'exit',
		},
		secondButton: {
			size: 'small',
			label: 'Cменить пароль',
			color: 'transperent',
			type: 'button',
			before: 'password',
		},
	},
};
