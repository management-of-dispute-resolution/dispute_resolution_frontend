/* eslint-disable camelcase */
import { makeRequest, makeFormDataReq } from './apiPattern';

// Авторизация
export function authorize({ email, password }) {
	return makeRequest('/api/auth/token/login/', 'POST', { email, password });
}
// Logout
export function logout() {
	return makeRequest('/api/auth/token/logout/', 'POST', undefined);
}
// Изменить пароль
export function changePassword({ new_password, current_password }) {
	return makeRequest('/api/users/set_password/', 'POST', {
		new_password,
		current_password,
	});
}
// Регистрация - временно доступно
export function register({
	first_name,
	last_name,
	phone_number,
	email,
	password,
}) {
	return makeRequest('/api/users/', 'POST', {
		first_name,
		last_name,
		phone_number,
		email,
		password,
	});
}
// Получение пользователя
export function getUserInfo() {
	return makeRequest('/api/users/me/', 'GET', undefined);
}

// Получение пользователя по id
export function getUserIdInfo(id) {
	return makeRequest(`/api/users/me/${id}`, 'GET', undefined);
}

// Получение диспута
export function getDisputes() {
	return makeRequest(`/api/disputes/`, 'GET', undefined);
}

// Создание дтспута
export function createDisputesId(data) {
	return makeFormDataReq(`/api/disputes/`, 'PUT', data);
}

// Получение диспута по id
export function getDisputesId(id) {
	return makeRequest(`/api/disputes/${id}/`, 'GET', undefined);
}

// Редактирование диспута по id
export function editDisputesId(id, data) {
	return makeFormDataReq(`/api/disputes/${id}/`, 'PUT', data);
}

// Редактирование диспута по id
export function editPatchDisputesId(id, data) {
	return makeFormDataReq(`/api/disputes/${id}/`, 'PATCH', data);
}

// Удаление диспута по id
export function deleteDisputesId(id) {
	return makeRequest(`/api/disputes/${id}/`, 'DELETE', undefined);
}

// Получение комментариев к диспуту по id
export function getComments(id) {
	return makeRequest(`/api/disputes/${id}/comments/`, 'GET', undefined);
}

// Добавление комментариев к диспуту по id
export function createComments({ id, content, file }) {
	return makeRequest(`/api/disputes/${id}/comments/`, 'POST', {
		id,
		content,
		file,
	});
}
