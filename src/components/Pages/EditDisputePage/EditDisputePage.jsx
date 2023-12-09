import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NewDisputeForm from '../../ui-kit/NewDisputeForm/NewDisputeForm';

import { getDisputeId } from '../../../utils/api/disputes.api';
import { handleFormDataRequest } from '../../../utils/api/reqFormDataPattern';
import { useAuth } from '../../../hook/useAuth';
import Preloader from '../../Preloader/Preloader';

const EditDisputePage = () => {
	const { isLoading, setIsLoading } = useAuth();
	const navigate = useNavigate();

	const { state } = useLocation();
	const { disputeId } = state;

	const [initialSelectedOpponents, setInitialSelectedOpponents] = useState();
	const [initialDisputeText, setInitialDisputeText] = useState();

	// Получение диспута по id
	const getDisputeById = async (id) => {
		try {
			const reqData = await getDisputeId(id);
			// console.log('Карточка по ИД', reqData)
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
		setIsLoading(true);
		try {
			const reqData = await handleFormDataRequest(`/api/disputes/${disputeId}/`, 'PATCH', data);

			const { id } = reqData;
			navigate(`/disputes/${id}`, { state: { createMessage: 'edit' } });
		} catch (err) {
			console.error('res Error ', err);
		}
		setIsLoading(false);
	};

	return (<>
		{isLoading && <Preloader />}
		{!isLoading && (
			<NewDisputeForm
				handleRequestNewDispute={handleEditDispute}
				initialSelectedOpponents={initialSelectedOpponents}
				initialDisputeText={initialDisputeText}
				isEditDispute
			/>
		)}
	</>

	);
};

export { EditDisputePage };
