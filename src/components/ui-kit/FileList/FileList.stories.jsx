import FileList from './FileList';
import './FileList.css';

export default {
	title: 'Dispute_Resolution/ui-kit/FileList',
	component: FileList,
	tags: ['autodocs'],
};
export const Default = {
	args: {
		files: [
			{
				id: 1,
				size: 3916571,
				filename: '1689778158511.jpg',
				file: 'http://backend:8000/media/uploads/1689778158511.jpg',
				dispute: 8,
			},
		],
		type: 'dispute',
	},
};
