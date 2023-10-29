import React, { useEffect, useState } from 'react';
import DisputeCardList from '../../DisputeList/DisputeCardList';

import { getDisputes } from '../../../utils/api/disputes.api';

const DisputesPage = () => {
	const [allDisputes, setAllDisputes] = useState({});

	// Получить все диспуты
	const getAllDisputes = async () => {
		try {
			const reqData = await getDisputes();
			if (reqData) {
				setAllDisputes(reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	useEffect(() => {
		getAllDisputes();
	}, []);

	const handleCardClick = (id) => {
		console.log(id);
	};

	return <DisputeCardList array={allDisputes} onClick={handleCardClick} />;
};

export default DisputesPage;
