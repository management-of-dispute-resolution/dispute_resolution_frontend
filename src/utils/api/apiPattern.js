const BASE_URL_AUTH = 'http://80.87.109.81';

export const responceProcessing = (res) =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const makeRequest = async (url, method, body) => {
	const token = localStorage.getItem('token');
	const headers = { 'Content-Type': 'application/json' };
	if (token !== undefined && token !== null) {
		headers.authorization = `Token ${token}`;
	}
	const config = { method, headers };
	if (body !== undefined) {
		config.body = JSON.stringify(body);
	}
	console.log(`${url}`);
	console.log(config);
	const res = await fetch(`${BASE_URL_AUTH}${url}`, config);
	return responceProcessing(res);
};

// Запрос с FormData
export const makeFormDataReq = async (url, method, body) => {
	const config = { method, body };
	const res = await fetch(`${BASE_URL_AUTH}${url}`, config);
	return responceProcessing(res);
};
