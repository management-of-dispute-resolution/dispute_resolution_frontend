import React, { useEffect, useState } from 'react';
import NewDisputeForm from '../../ui-kit/NewDisputeForm/NewDisputeForm';

import { createDispute } from '../../../utils/api/disputes.api';
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
		console.log('Создать');
		// try {
		const reqData = await createDispute(data);
		// if (reqData) {
		console.log('res Data ', reqData);
		// }
		// }

		// }
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
