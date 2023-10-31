import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NewDisputeForm from '../../ui-kit/NewDisputeForm/NewDisputeForm';

import { getUsers } from '../../../utils/api/user.api';
import {
	editPatchDisputeId,
	getDisputeId,
} from '../../../utils/api/disputes.api';

const EditDisputePage = () => {
	const navigate = useNavigate();

	const { state } = useLocation();
	const { disputeId } = state;

	const [initialArrayUsers, setInitialArrayUsers] = useState([]);
	// const [initialSelectedOpponents, setInitialSelectedOpponents] = useState();
	// const [initialDisputeText, setInitialDisputeText] = useState()

	// Получить всех пользователей
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

	// Получение диспута по id
	const getDisputeById = async (id) => {
		try {
			const reqData = await getDisputeId(id);
			if (reqData) {
				console.log('res Data ', reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	useEffect(() => {
		getAllUsers();
		getDisputeById(disputeId);
	}, [disputeId]);

	// Создать диспут
	const handleEditDispute = async (data) => {
		try {
			const reqData = await editPatchDisputeId(data);
			if (reqData) {
				navigate('disputes');
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	return (
		<NewDisputeForm
			initialArrayUsers={initialArrayUsers}
			handleRequestNewDispute={handleEditDispute}
			isEditDispute
		/>
	);
};

export { EditDisputePage };
