import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewDisputeForm from '../../ui-kit/NewDisputeForm/NewDisputeForm';

import { handleFormDataRequest } from '../../../utils/api/reqFormDataPattern';
import { useAuth } from '../../../hook/useAuth';
import Preloader from '../../Preloader/Preloader';

const CreateDisputePage = () => {
	const { isLoading, setIsLoading, newCardDispute } = useAuth();

	const navigate = useNavigate();

	// Создать диспут
	const handleCreateDispute = async (data) => {
		setIsLoading(true);
		try {
			const reqData = await handleFormDataRequest('/api/disputes/', 'POST', data);
			const { id } = reqData;
			navigate(`/disputes/${id}`, { state: { createMessage: 'new' } });
		} catch (err) {
			console.error('res Error ', err);
		}
		setIsLoading(false);
	};

	return (
		<>
			{isLoading && <Preloader />}
			{!isLoading && (
				<NewDisputeForm
					initialSelectedOpponents={newCardDispute.selectedOpponents}
					initialDisputeText={newCardDispute.disputeText}
					initialFileList={newCardDispute.fileList}
					handleRequestNewDispute={handleCreateDispute}
					isEditDispute={false}
				/>
			)}
		</>
	);
};

export default CreateDisputePage;
