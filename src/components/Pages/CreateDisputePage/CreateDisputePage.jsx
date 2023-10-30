import React, { useEffect, useState } from 'react';
import NewDisputeForm from '../../ui-kit/NewDisputeForm/NewDisputeForm';

// import { createDispute } from '../../../utils/api/disputes.api';
import { getUsers } from '../../../utils/api/user.api';

const CreateDisputePage = () => {
	const [initialArrayUsers, setInitialArrayUsers] = useState([]);

	// Получить всех пользователей - НЕ РАБОТАЕТ (получаем только текущего)
	const getAllUsers = async () => {
		try {
			const reqData = await getUsers();
			if (reqData) {
				setInitialArrayUsers(reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	useEffect(() => {
		getAllUsers();
	}, []);

	// Создать диспут
	const handleCreateDispute = async (data) => {
		const headers = {};

		const token = localStorage.getItem('token'); // Проверяем токен в LS
		if (token !== undefined && token !== null) {
			// если токен есть
			headers.authorization = `Token ${token}`; // добавляем заголовок авторизации по токену
		}

		const config = { method: 'POST', headers };
		if (data !== undefined) {
			// Проверяем наличие тела запроса
			config.body = data; // если есть добавляем в запрос
		}

		const res = await fetch('http://80.87.109.81/api/disputes/', config).then(
			(resp) => resp.json()
		);

		console.log(res);

		// const reqData = await createDispute(data);
		// console.log('res Data ', reqData);
	};

	return (
		<NewDisputeForm
			initialArrayUsers={initialArrayUsers}
			handleRequestNewDispute={handleCreateDispute}
			isEditDispute={false}
		/>
	);
};

export default CreateDisputePage;
