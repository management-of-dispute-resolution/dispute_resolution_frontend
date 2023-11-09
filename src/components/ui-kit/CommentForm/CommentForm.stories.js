import CommentForm from './CommentForm';

export default {
	title: 'Dispute_Resolution/Forms/CommentForm',
	component: CommentForm,
};

export const Default = {
	args: {
		user: {
			first_name: 'Иван',
			last_name: 'Иванов',
		},
	},
};
