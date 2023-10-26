/* eslint-disable camelcase */
import './App.css';
import React from 'react';
// import { useEffect, useState } from "react";
// import { Route, Navigate, Routes, useNavigate, useLocation } from 'react-router-dom';

import * as fullApi from '../../utils/api/MainApi';

function App() {
	const dataLogin = {
		email: 'cadsergrf@ya.ru',
		password: 'disputes_1',
	};

	const dataChangePass = {
		new_password: 'disputes_1',
		current_password: 'disputes1',
	};

	// Авторизиция
	const checkLogin = async ({ email, password }) => {
		try {
			const reqData = await fullApi.login({ email, password });
			if (reqData) {
				console.log('reqData ', reqData.auth_token);
				localStorage.setItem('token', reqData.auth_token);
			}
		} catch (err) {
			console.error('error api', err);
		}
	};

	// Изменение пароля
	const changePass = async ({ new_password, current_password }) => {
		try {
			const reqData = await fullApi.changePassword({
				new_password,
				current_password,
			});
			if (reqData) {
				console.log('reqData ', reqData);
			}
		} catch (err) {
			console.error('error api', err);
		}
	};

	// LOGOUT
	const userLogout = async () => {
		try {
			const reqData = await fullApi.logout();
			if (reqData) {
				console.log('reqData ', reqData);
				localStorage.removeItem('token');
			}
		} catch (err) {
			console.error('error api', err);
		}
	};

	// GET Запросы
	const getUser = async () => {
		try {
			const reqData = await fullApi.getUserInfo();
			if (reqData) {
				console.log('reqData ', reqData);
			}
		} catch (err) {
			console.error('error api', err);
		}
	};
	const getUserID = async (id) => {
		try {
			const reqData = await fullApi.getUserIdInfo(id);
			if (reqData) {
				console.log('reqData ', reqData);
			}
		} catch (err) {
			console.error('error api', err);
		}
	};
	const getAllUsers = async () => {
		try {
			const reqData = await fullApi.getUsers();
			if (reqData) {
				console.log('reqData ', reqData);
			}
		} catch (err) {
			console.error('error api', err);
		}
	};

	// Карточки
	const dataCard = {
		description: 'Описание конфликта',
		file: 'Какие-то файлы',
		opponent: ['Андрей', 'Сергей'],
	};
	// Получить карточки
	const getDisputes = async () => {
		try {
			const reqData = await fullApi.getDisputes();
			if (reqData) {
				console.log('reqData ', reqData);
			}
		} catch (err) {
			console.error('error api', err);
		}
	};
	// Получить карточки
	const createDisputes = async ({ description, file, opponent }) => {
		try {
			const reqData = await fullApi.createDisputesId({
				description,
				file,
				opponent,
			});
			if (reqData) {
				console.log('reqData ', reqData);
			}
		} catch (err) {
			console.error('error api', err);
		}
	};

	return (
		<div className="App">
			<p> Empty page</p>
			<div>
				<p>Авторизация - пользователи</p>
				<button type="button" onClick={() => checkLogin(dataLogin)}>
					login
				</button>
				<button type="button" onClick={() => userLogout()}>
					LOGOUT
				</button>
				<button type="button" onClick={() => changePass(dataChangePass)}>
					Изменить пароль
				</button>
				<button type="button" onClick={() => getUser()}>
					Получить пользователя
				</button>
				<button type="button" onClick={() => getUserID(8)}>
					Получить пользователя по ID
				</button>
				<button type="button" onClick={() => getAllUsers()}>
					Получить всех пользователей
				</button>
			</div>
			<div>
				<p>Карточки</p>
				<button type="button" onClick={() => getDisputes()}>
					Все карточки
				</button>
				<button type="button" onClick={() => createDisputes(dataCard)}>
					Создать карточку
				</button>
			</div>
			{/* <p>{resp}</p> */}
		</div>
	);
}

export default App;

// first_name: 'Саня',
// last_name: 'Евдокимов',
// phone_number: '79998887733',
// email: 'cadsergrf@ya.ru',
// password: 'disputes',
