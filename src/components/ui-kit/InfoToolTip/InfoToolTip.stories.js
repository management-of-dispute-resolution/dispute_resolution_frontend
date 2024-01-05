import { InfoToolTip } from './InfoToolTip';

export default {
	title: 'Dispute_Resolution/ui-kit/InfoToolTip',
	component: InfoToolTip,
};

export const Visible = {
	args: {
		isOpen: true,
		isSuccess: true,
		doneText: 'Изменения сохранены',
		errorText: 'Что-то пошло не так',
	},
};
