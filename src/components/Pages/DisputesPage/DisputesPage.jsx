import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DisputeCardList from '../../DisputeList/DisputeCardList';

import { getDisputes } from '../../../utils/api/disputes.api';

const DisputesPage = () => {
	// const navigate = useNavigate();

	const [allDisputes, setAllDisputes] = useState({});

	// Получить все диспуты
	const getAllDisputes = async () => {
		try {
			const reqData = await getDisputes();
			if (reqData) {
				console.log(reqData);
				setAllDisputes(reqData);
			}
		} catch (err) {
			console.log('all', allDisputes);
			console.error('res Error ', err);
		}
	};

	useEffect(() => {
		getAllDisputes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// const handleCardClick = (id) => {
	//   navigate(`/disputes/${id}`)
	// };

	return (
		<p>njhbfvjhzfbv</p>
		// <DisputeCardList array={allDisputes} onClick={handleCardClick} />
	);
};

export default DisputesPage;
