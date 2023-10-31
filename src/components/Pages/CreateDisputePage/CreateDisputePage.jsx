import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewDisputeForm from '../../ui-kit/NewDisputeForm/NewDisputeForm';

import { handleFormDataRequest } from '../../../utils/api/reqFormDataPattern';
import { getUsers } from '../../../utils/api/user.api';

const CreateDisputePage = () => {
	const navigate = useNavigate();
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
		try {
			const reqData = await handleFormDataRequest('/api/disputes/', data);
			const { id } = reqData;
			navigate(`/disputes/${id}`, { state: { createMessage: 'ok' } });
		} catch (err) {
			console.error('res Error ', err);
		}
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
