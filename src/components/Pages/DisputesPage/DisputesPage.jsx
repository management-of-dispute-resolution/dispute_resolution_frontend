// import React, { useEffect, useState } from 'react';
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DisputeCardList from '../../DisputeList/DisputeCardList';

import { getDisputes } from '../../../utils/api/disputes.api';
import { useAuth } from '../../../hook/useAuth';
import Preloader from '../../Preloader/Preloader';

const DisputesPage = () => {
	// const navigate = useNavigate();
	const { isLoading, setIsLoading, isError, setIsError } = useAuth();

	// const [allDisputes, setAllDisputes] = useState({});

	// Получить все диспуты
	const getAllDisputes = async () => {
		setIsLoading(true);
		setIsError(false);
		try {
			const reqData = await getDisputes();
			if (reqData) {
				console.log('Запрос всех карточек', reqData);
				setIsLoading(false);
				// setAllDisputes(reqData);
			}
		} catch (err) {
			setIsError(true);
		}
	};

	useEffect(() => {
		getAllDisputes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// const handleCardClick = (id) => {
	// 	navigate(`/disputes/${id}`)
	// };

	return (
		<>
			{isLoading && <Preloader />}
			{!isLoading && isError && <h2>Ошибка сервера</h2>}
			{/* {!isLoading && !isError && <DisputeCardList array={allDisputes} onClick={handleCardClick} />} */}
		</>
	);
};

export { DisputesPage };
