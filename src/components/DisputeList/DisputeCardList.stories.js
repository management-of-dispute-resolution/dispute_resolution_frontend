import DisputeCardList from './DisputeCardList';
import './DisputeCardList.css';

const resolved = 'resolved';

const inСonsideration = 'inСonsideration';

const notConsidered = 'notConsidered';

const massive = [
	{
		id: 1,
		title: 'Конфликт с Ивановым И.',
		dateOfCreation: '6 октября',
		content:
			'Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попрос Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попросил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.Пил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов м , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный... ',
		status: resolved,
		statusDate: '1 июля 11:37',
		files: [
			'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.pdf',
			'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.png',
			'https://upload.wikimedia.org/wikipedia/commons/1/13/Saturn_during_Equinox_%28rot45%29.zip',
		],
	},
	{
		id: 2,
		title: 'Конфликт с Ивановым И.',
		dateOfCreation: '32 февраля',
		content: 'Довожу до вашего сведения, что я жалобщик ',
		status: inСonsideration,
		statusDate: '5 июля 11:37',
		files: [
			'https://upload.wikimedia.org/wikipedia/commons/d/d9/Я люблю Россию.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/c/cb/Тестовый текст PDF.pdf',
		],
	},
	{
		id: 3,
		title: 'Конфликт с Пушкиным И.',
		dateOfCreation: '4 сентября',
		content:
			'Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попрос Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов Л.П. оскорбил меня и непотребно себя повел: я попросил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.Пил предоставить мне копии платежных документов для направления контрагентам , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный бухгалтер Иванов м , на что Смирнов Л.П...Довожу до вашего сведения, что 5 октября главный... ',
		status: notConsidered,
		statusDate: '7 июля 11:37',
		files: [],
	},
];
export default {
	title: 'Dispute_Resolution/DisputeCardList',
	component: DisputeCardList,
	tags: ['autodocs'],
};

export const Default = () => <DisputeCardList massive={massive} />;
