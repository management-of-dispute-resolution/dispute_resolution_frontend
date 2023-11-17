import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NewDisputeForm from '../../ui-kit/NewDisputeForm/NewDisputeForm';

import { getDisputeId } from '../../../utils/api/disputes.api';
import { handleFormDataRequest } from '../../../utils/api/reqFormDataPattern';

const EditDisputePage = () => {
	const navigate = useNavigate();

	const { state } = useLocation();
	const { disputeId } = state;

	const [initialSelectedOpponents, setInitialSelectedOpponents] = useState();
	const [initialDisputeText, setInitialDisputeText] = useState();

	// Получение диспута по id
	const getDisputeById = async (id) => {
		try {
			const reqData = await getDisputeId(id);
			console.log('Карточка по ИД', reqData)
			if (reqData) {
				setInitialDisputeText(reqData.description);
				setInitialSelectedOpponents(reqData.opponent);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	useEffect(() => {
		getDisputeById(disputeId);
	}, [disputeId]);

	// Редактировать диспут
	const handleEditDispute = async (data) => {
		try {
			const reqData = await handleFormDataRequest(`/api/disputes/${disputeId}/`, 'PATCH', data);
			console.log('responce редактирования карточки', reqData);
		} catch (err) {
			console.error('res Error ', err);
		}
		navigate('/disputes');
	};

	return (
		<NewDisputeForm
			handleRequestNewDispute={handleEditDispute}
			initialSelectedOpponents={initialSelectedOpponents}
			initialDisputeText={initialDisputeText}
			isEditDispute
		/>
	);
};

export { EditDisputePage };
