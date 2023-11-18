/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisputeCardList from '../../DisputeCardList/DisputeCardList';

import { getDisputes, deleteDisputesId } from '../../../utils/api/disputes.api';
import { useAuth } from '../../../hook/useAuth';
import Preloader from '../../Preloader/Preloader';

const DisputesPage = () => {
	const navigate = useNavigate();
	const { isLoading, setIsLoading, isError, setIsError } = useAuth();

	const [allDisputes, setAllDisputes] = useState([]);

	const [count, setCount] = useState();
	// eslint-disable-next-line no-unused-vars
	// eslint-disable-next-line no-unused-vars
	const [currentPage, setCurrentPage] = useState(2); // Initial page is 1
	const [pageSize, setPageSize] = useState(6); // Initial page size is 10
	const [hasMore, setHasMore] = useState(true);

	// Получить все диспуты
	const getAllDisputes = useCallback(async () => {
		setIsLoading(true);
		setIsError(false);
		try {
			const reqData = await getDisputes({
				queryParam: 'pagination',
				value: {
					page: 1, // Pass the page number you want to fetch
					size: 6, // Adjust the page size as needed
				},
			});
			if (reqData) {
				setIsLoading(false);
				setAllDisputes(reqData.results);
				setCount(reqData.count);
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
	const More = async (event) => {
		event.preventDefault();

		try {
			const reqData = await getDisputes({
				queryParam: 'pagination',
				value: {
					page: currentPage, // Pass the page number you want to fetch
					size: pageSize, // Adjust the page size as needed
				},
			});

			setCurrentPage((prev) => prev + 1);
			setAllDisputes((prev) => [...prev, ...reqData.results]);

			if (allDisputes.length + reqData.results.length >= reqData.count) {
				setHasMore(false);
			}
		} catch (error) {
			console.log(error);
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
					More={More}
					hasMore={hasMore}
				/>
			)}
		</>
	);
};
DisputesPage.defaultProps = {
	allDisputes: [],
};

export { DisputesPage };
