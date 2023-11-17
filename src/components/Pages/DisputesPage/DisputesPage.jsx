import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisputeCardList from '../../DisputeCardList/DisputeCardList';

import { getDisputes, deleteDisputesId } from '../../../utils/api/disputes.api';
import { useAuth } from '../../../hook/useAuth';
import Preloader from '../../Preloader/Preloader';

const DisputesPage = () => {
	const navigate = useNavigate();
	const { isLoading, setIsLoading, isError, setIsError } = useAuth();

	const [allDisputes, setAllDisputes] = useState({});

	// Получить все диспуты
	const getAllDisputes = useCallback(async () => {
		setIsLoading(true);
		setIsError(false);
		try {
			const reqData = await getDisputes({ queryParam: 'notParam', value: 'empty' });
			if (reqData) {
				setIsLoading(false);
				setAllDisputes(reqData.results);
			}
		} catch (err) {
			setIsError(true);
		}
	}, [setIsError, setIsLoading]);

	useEffect(() => {
		getAllDisputes();
	}, [getAllDisputes]);

	const handleCardClick = (id) => {
		navigate(`/disputes/${id}`);
	};

	const handleChangeDispute = (id) => {
		navigate('/edit-dispute', { state: { disputeId: id } });
	};

	// Удаление диспута
	const handleDeleteDispute = async (id) => {
		try {
			const reqData = await deleteDisputesId(id);
			if (reqData) {
				const newAllDisputes = allDisputes.filter((card) => card.id !== id);
				setAllDisputes(newAllDisputes);
			}
		} catch (err) {
			console.error('Delete disp Error ', err);
		}
	};

	return (
		<>
			{isLoading && <Preloader />}
			{!isLoading && isError && <h2>Ошибка сервера</h2>}
			{!isLoading && !isError && (
				<DisputeCardList
					disputesList={allDisputes}
					onClick={handleCardClick}
					handleChangeDispute={handleChangeDispute}
					handleDeleteDispute={handleDeleteDispute}
				/>
			)}
		</>
	);
};

export { DisputesPage };
