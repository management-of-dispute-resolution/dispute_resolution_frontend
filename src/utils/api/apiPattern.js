const BASE_URL_AUTH = 'http://80.87.109.81';

export const responceProcessing = (res) =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export function makeRequest(url, method, body) {
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
	return fetch(`${BASE_URL_AUTH}${url}`, config).then((res) =>
		responceProcessing(res)
	);
}

// Запрос с FormData
export function makeFormDataReq(url, method, body) {
	const config = { method, body };
	return fetch(`${BASE_URL_AUTH}${url}`, config).then((res) =>
		responceProcessing(res)
	);
}
