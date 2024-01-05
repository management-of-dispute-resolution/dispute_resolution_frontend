const BASE_URL_AUTH = 'https://ccdia.acceleratorpracticum.ru';

export const handleFormDataRequest = async (url, method, data) => {
	const headers = {};

	const token = localStorage.getItem('token'); // Проверяем токен в LS
	if (token !== undefined && token !== null) {
		// если токен есть
		headers.authorization = `Token ${token}`; // добавляем заголовок авторизации по токену
	}

	const config = { method, headers };
	if (data !== undefined) {
		// Проверяем наличие тела запроса
		config.body = data; // если есть добавляем в запрос
	}

	const res = await fetch(`${BASE_URL_AUTH}${url}`, config).then((resp) =>
		resp.json()
	);

	return res;
};
