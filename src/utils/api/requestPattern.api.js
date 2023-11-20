const BASE_URL_AUTH = 'https://ccdia.acceleratorpracticum.ru';

// Обработка ответа от сервера
export const responceProcessing = (res) =>
	// eslint-disable-next-line no-nested-ternary
	!res.ok
		? res.json()
		
		.then( (data) => 
			
		// eslint-disable-next-line prefer-promise-reject-errors
		Promise.reject({res,data})
			
				)


		: (res.status === 204)
		
		? Promise.resolve(res.status)
		: res.json();
		

// Формирование модели запроса
export const makeRequest = async (url, method, body, param) => {
	const headers = { 'Content-Type': 'application/json' };

	let fetchURL = BASE_URL_AUTH + url;

	const token = localStorage.getItem('token'); // Проверяем токен в LS
	if (token !== undefined && token !== null) {
		// если токен есть
		headers.authorization = `Token ${token}`; // добавляем заголовок авторизации по токену
	}

	if (param !== undefined) { // Параметры запроса такие как: поиск и пагинация
		const { queryParam, value } = param;
		if (queryParam === 'search') {
			fetchURL += `?search=${value}`
		}
		else if (queryParam === 'pagination') {
			fetchURL += `?page=${value.page}&page_size=${value.size}`
		}
	}

	const config = { method, headers };
	if (body !== undefined) {
		// Проверяем наличие тела запроса
		config.body = JSON.stringify(body); // если есть добавляем в запрос
	}

	const res = await fetch(fetchURL, config);

	return responceProcessing(res);
	// return res.json
};
