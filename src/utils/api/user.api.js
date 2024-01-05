/* eslint-disable camelcase */
import { makeRequest } from './requestPattern.api';

// Получение все пользователей - НЕ РАБОТАЕТ (только текущий)
export const getUsers = (param) => makeRequest(`/api/users/`, 'GET', undefined, param);

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
	},
		undefined
	);

// Получение пользователя - РАБОТАЕТ
export const getUserInfo = () =>
	makeRequest('/api/users/me/', 'GET', undefined, undefined);

// Получение пользователя по id
export const getUserIdInfo = (id) =>
	makeRequest(`/api/users/${id}/`, 'GET', undefined, undefined);

// Авторизация - РАБОТАЕТ
export const login = ({ email, password }) =>
	makeRequest('/api/auth/token/login/', 'POST', { email, password }, undefined);

// Logout - РАБОТАЕТ на костылях
export const logout = () =>
	makeRequest('/api/auth/token/logout/', 'POST', undefined, undefined);

// Изменить пароль - РАБОТАЕТ на костылях
export const changePassword = ({ new_password, current_password }) =>
	makeRequest('/api/users/set_password/', 'POST', {
		new_password,
		current_password,
	},
		undefined);
