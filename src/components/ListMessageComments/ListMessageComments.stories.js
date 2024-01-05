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
			id: 169,
			sender: {
				email: "user@yandex.ru",
				id: 8,
				first_name: "Анна",
				last_name: "Сергеева",
				phone_number: "666",
				role: "user"
			},
			file: [],
			content: "Начать тестовый текст",
			dispute: 150,
			created_at: "2023-11-25 20:52:30"
		},
		{
			id: 169,
			sender: {
				email: "mediator@yandex.ru",
				id: 8,
				first_name: "mediator",
				last_name: "mediator",
				phone_number: "666",
				role: "mediator"
			},
			file: [],
			content: "Тестовый ответ",
			dispute: 150,
			created_at: "2023-11-25 20:52:30"
		}, {
			id: 169,
			sender: {
				email: "user@yandex.ru",
				id: 8,
				first_name: "Анна",
				last_name: "Сергеева",
				phone_number: "666",
				role: "user"
			},
			file: [],
			content: "Тестовый текст x2",
			dispute: 150,
			created_at: "2023-11-25 20:52:30"
		}
	],
};
