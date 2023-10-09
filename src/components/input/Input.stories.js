import Input from './Input';

export default {
	title: 'Dispute_Resolution/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};
export const Password = {
	args: {
		name: 'Password',
		label: 'Пароль',
		placeholder: 'Пароль',
		type: 'password',
	},
};

export const Email = {
	args: {
		name: 'Email',
		placeholder: 'Электронная почта',
		label: 'Электронная почта',
		type: 'email',
	},
};
