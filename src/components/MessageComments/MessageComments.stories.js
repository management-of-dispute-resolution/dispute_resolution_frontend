import MessageComments from './MessageComments';

export default {
	title: 'Dispute_Resolution/MessageComments',
	component: MessageComments,
	tags: ['autodocs'],
};

const MessageFunction = (args) => <MessageComments {...args} />;

export const Default = MessageFunction.bind({});

Default.args = {
	first_name: 'Виктор',
	last_name: 'Петров',
	date: '8 окт в 18:13',
	text: 'Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, наверно, буквально в какие-нибудь пару строчичек, возможно, написано...Здесь отображается какой-нибудь последний комментарий, совсем чуть-чуточку, ограничение, какое-нибудь завершение обращения',
	files: [
		{
			id: 1,
			size: 3916571,
			filename: '1689778158511.jpg',
			file: 'http://backend:8000/media/uploads/1689778158511.jpg',
			dispute: 8,
		},
	],
	isDisputePage: true,
};
