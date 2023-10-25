/* eslint-disable camelcase */
import './App.css';
import React, { useState } from 'react';
// import { useEffect, useState } from "react";
// import { Route, Navigate, Routes, useNavigate, useLocation } from 'react-router-dom';

import * as fullApi from '../../utils/api/MainApi';

function App() {
	const dataApi = {
		first_name: 'Сергей',
		last_name: 'Евдокимов',
		phone_number: '+79998887766',
		email: 'cadsergrf@yandex.ru',
		password: 'disputes',
	};

	const [resp, setResp] = useState();

	// регистрация пользователя
	const checkApi = async ({
		first_name,
		last_name,
		phone_number,
		email,
		password,
	}) => {
		try {
			const reqData = await fullApi.register({
				first_name,
				last_name,
				phone_number,
				email,
				password,
			});
			if (reqData) {
				console.log(reqData);
				setResp(reqData);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const callApi = () => {
		checkApi(dataApi);
	};

	return (
		<div className="App">
			<p> Empty page</p>
			<button type="button" onClick={callApi}>
				Проверка апииииии
			</button>
			<p>{resp}</p>
		</div>
	);
}

export default App;
