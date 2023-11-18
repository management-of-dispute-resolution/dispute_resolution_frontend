const INFO_STATES = {
	DEFAULT: {
		isOpen: false,
		isSuccess: false,
		doneText: '',
		errorText: '',
	},
	GENERAL_ERROR: {
		isOpen: true,
		isSuccess: false,
		doneText: '',
		errorText: '',
	},
    GENERAL_SUCCESS: {
		isOpen: true,
		isSuccess: false,
		doneText: '',
		errorText: '',
	},
	CLOSE_SUCCESS: {
		isOpen: true,
		isSuccess: true,
		doneText: 'Обращение закрыто',
		errorText: '',
	},
	NOT_STARTED: {
		isOpen: true,
		isSuccess: false,
		doneText: '',
		errorText: 'Диспут еще не начат',
	},
	ALREADY_CLOSED: {
		isOpen: true,
		isSuccess: false,
		doneText: '',
		errorText: 'Диспут уже закрыт',
	},
    ADD_OPPONENT: {
		isOpen: true,
		isSuccess: true,
		doneText: 'Оппонент добавлен в диспут',
		errorText: '',
	},
};

export default INFO_STATES;
