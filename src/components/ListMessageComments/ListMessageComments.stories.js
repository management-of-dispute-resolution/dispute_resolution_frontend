import ListMessageComments from './ListMessageComments';

export default {
	title: 'Dispute_Resolution/ListMessageComments',
	component: ListMessageComments,
	tags: ['autodocs'],
};

const ListMessage = (args) => <ListMessageComments {...args} />;

export const Default = ListMessage.bind({});

Default.args = {
	comments: [
		{
			id:12,
			first_name: 'Иван',
			last_name: 'Иванов',
			role: 'user',
			date: '2021-10-08T18:13:00Z',
			text: 'Это пример текста комментария, который отображается в компоненте MessageComments.',
			files: [
			  {
				id: 1,
				filename: 'документ.pdf',
				file: '/path/to/document.pdf',
			  },
			  {
				id: 2,
				filename: 'изображение.jpg',
				file: '/path/to/image.jpg',
			  },]
		}
	],
};
