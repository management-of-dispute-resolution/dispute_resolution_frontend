const mockDisputeData = [
	{
		id: 1,
		creator: 'Пользователь 1',
		description: 'Описание спора 1',
		status: 'started',
		closed_at: '2023-10-15',
		created_at: '2023-10-10',
		files: ['file1.jpg', 'file2.pdf'],
	},
	{
		id: 2,
		creator: 'Пользователь 2',
		description: 'Описание спора 2',
		status: 'closed',
		closed_at: '2023-10-20',
		created_at: '2023-10-12',
		files: ['file3.png'],
	},
	{
		id: 3,
		creator: 'Пользователь 3',
		description: 'Описание спора 3',
		status: 'not_started',
		closed_at: null,
		created_at: '2023-10-18',
		files: [],
	},
	{
		id: 4,
		creator: 'Пользователь 4',
		description: 'Описание спора 4',
		status: 'started',
		closed_at: '2023-10-25',
		created_at: '2023-10-14',
		files: ['file4.jpg', 'file5.pdf'],
	},
	{
		id: 5,
		creator: 'Пользователь 5',
		description: 'Описание спора 5',
		status: 'closed',
		closed_at: '2023-10-28',
		created_at: '2023-10-16',
		files: ['file6.png'],
	},
];

export default mockDisputeData;
