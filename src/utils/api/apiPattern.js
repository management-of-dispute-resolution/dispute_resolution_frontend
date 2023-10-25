const BASE_URL_AUTH = 'http://80.87.109.81';

export const responceProcessing = (res) =>
	res.ok
		? res.json()
		: res.json().then((err) => {
				Promise.reject(new Error('message ...', { cause: err }));
		  });

// Стандартный запрос
export async function makeRequest(url, method, body) {
	const headers = { 'Content-Type': 'application/json' };
	const config = { method, headers };
	if (body !== undefined) {
		config.body = JSON.stringify(body);
	}
	const res = await fetch(`${BASE_URL_AUTH}${url}`, config);
	return responceProcessing(res);
}

// Запрос с FormData
export async function makeFormDataReq(url, method, body) {
	const config = { method, body };
	const res = await fetch(`${BASE_URL_AUTH}${url}`, config, {
		mode: 'no-cors',
	});
	return responceProcessing(res);
}
