import DisputeCard from './DisputeCard';
import './DisputeCard.css';

export default {
	title: 'Dispute_Resolution/DisputeCard',
	component: DisputeCard,
	tags: ['autodocs'],
};
export const Default = {
	args: {
		id: 0,
		creator: 'Конфликт с Ивановым И.',
		created_at: '6 октября',
		description:
			'Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попрос Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попросил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.Пил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов м , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный... ',
		status: 'started',
		closed_at: '1 июля 11:37',
		opponent: [],
		files: [
			{
				id: 1,
				size: 3916571,
				filename: '1689778158511.jpg',
				file: 'http://backend:8000/media/uploads/1689778158511.jpg',
				dispute: 8,
			}, {
				id: 1,
				size: 3916571,
				filename: '1689778158511.jpg',
				file: 'http://backend:8000/media/uploads/1689778158511.jpg',
				dispute: 8,
			}, {
				id: 1,
				size: 3916571,
				filename: '1689778158511.jpg',
				file: 'http://backend:8000/media/uploads/1689778158511.jpg',
				dispute: 8,
			},
		],
		comments: [],
	},
};
