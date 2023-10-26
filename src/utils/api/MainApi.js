/* eslint-disable camelcase */
import { makeRequest, makeFormDataReq } from './apiPattern';

// Авторизация - РАБОТАЕТ
export const login = ({ email, password }) =>
	makeRequest('/api/auth/token/login/', 'POST', { email, password });
// Logout - ЧТО В BODY - пустая строка? Ответ сервера Unexpected end of JSON input
export const logout = () =>
	makeRequest('/api/auth/token/logout/', 'POST', undefined);
// Изменить пароль - Ответ сервера Unexpected end of JSON input
export const changePassword = ({ new_password, current_password }) =>
	makeRequest('/api/users/set_password/', 'POST', {
		new_password,
		current_password,
	});
// Регистрация - временно доступно - РАБОТАЕТ
export const register = ({
	first_name,
	last_name,
	phone_number,
	email,
	password,
}) =>
	makeRequest('/api/users/', 'POST', {
		first_name,
		last_name,
		phone_number,
		email,
		password,
	});
// Получение пользователя - РАБОТАЕТ
export const getUserInfo = () =>
	makeRequest('/api/users/me/', 'GET', undefined);

// Получение пользователя по id - ОШИБКА  http://80.87.109.81/api/users/me/8/ 404 (Not Found)
export const getUserIdInfo = (id) =>
	makeRequest(`/api/users/me/${id}/`, 'GET', undefined);

// Получение пользователя по id - ОШИБКА  http://80.87.109.81/api/users/me/8/ 404 (Not Found)
export const getUsers = () => makeRequest(`/api/users/`, 'GET', undefined);

// Получение диспута
export const getDisputes = () =>
	makeRequest(`/api/disputes/`, 'GET', undefined);

// Создание дтспута - ПОКА ПРОБЛЕМА
export const createDisputesId = (data) =>
	makeFormDataReq(`/api/disputes/`, 'PUT', data);

// Получение диспута по id
export const getDisputesId = (id) =>
	makeRequest(`/api/disputes/${id}/`, 'GET', undefined);

// Редактирование диспута по id
export const editDisputesId = (id, data) =>
	makeFormDataReq(`/api/disputes/${id}/`, 'PUT', data);

// Редактирование диспута по id
export const editPatchDisputesId = (id, data) =>
	makeFormDataReq(`/api/disputes/${id}/`, 'PATCH', data);

// Удаление диспута по id
export const deleteDisputesId = (id) =>
	makeRequest(`/api/disputes/${id}/`, 'DELETE', undefined);

// Получение комментариев к диспуту по id
export const getComments = (id) =>
	makeRequest(`/api/disputes/${id}/comments/`, 'GET', undefined);

// Добавление комментариев к диспуту по id
export const createComments = ({ id, content, file }) =>
	makeRequest(`/api/disputes/${id}/comments/`, 'POST', {
		id,
		content,
		file,
	});
