import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisputeCardList from '../../DisputeCardList/DisputeCardList';

import { getDisputes, deleteDisputesId } from '../../../utils/api/disputes.api';
import { useAuth } from '../../../hook/useAuth';
import Preloader from '../../Preloader/Preloader';
import Pagination from '../../ui-kit/Pagination/Pagination';
import SelectLimit from '../../ui-kit/SelectLimit/SelectLimit';
import './DisputesPage.css';

const DisputesPage = () => {
	const navigate = useNavigate();
	const { isLoading, setIsLoading, isError, setIsError } = useAuth();

	const [allDisputes, setAllDisputes] = useState([]);

	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(5);
	const [totalPages, setTotalPages] = useState(1);

	const [count, setCount] = useState(0);

	// Получить все диспуты
	const getAllDisputes = useCallback(async () => {
		setIsLoading(true);
		setIsError(false);
		try {
			const reqData = await getDisputes({
				queryParam: 'pagination',
				value: {
					page, // Pass the page number you want to fetch
					size: limit, // Adjust the page size as needed
				},
			});
			if (reqData) {
				setIsLoading(false);
				setAllDisputes(reqData.results);
				setCount(reqData.count);
				setTotalPages(Math.ceil(reqData.count / limit));
			}
		} catch (err) {
			setIsError(true);
		}
	}, [setIsError, setIsLoading, page, limit]);

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

	const handlePageChange = (value) => {
		if (value === '... ') {
			setPage(1);
		} else if (value === '&lsaquo') {
			if (page === 1) {
				console.log('это первая страница');
			} else {
				setPage(page - 1);
			}
		} else if (value === '&rsaquo') {
			if (page === totalPages) {
				console.log('это последняя страница');
			} else {
				setPage(page + 1);
			}
		} else if (value === ' ...') {
			setPage(totalPages);
		} else {
			setPage(value);
		}
	};

	const HandleLimitChange = (value) => {
		setLimit(value);
		const newTotalPages = Math.ceil(count / value);
		setPage(page > newTotalPages ? newTotalPages : page);

		setTotalPages(newTotalPages);
	};

	return (
		<>
			{isLoading && <Preloader />}
			{!isLoading && isError && <h2>Ошибка сервера</h2>}
			{!isLoading && !isError && (
				<>
					<DisputeCardList
						disputesList={allDisputes}
						onClick={handleCardClick}
						handleChangeDispute={handleChangeDispute}
						handleDeleteDispute={handleDeleteDispute}
					/>
					{totalPages > 1 && (
						<div className="pagination-container">
							<SelectLimit onLimitChange={HandleLimitChange} limit={limit} />
							<Pagination
								totalPages={totalPages}
								page={page}
								limit={limit}
								siblings={3}
								onPageChange={handlePageChange}
							/>
						</div>
					)}
				</>
			)}
		</>
	);
};
DisputesPage.defaultProps = {
	allDisputes: [],
};

export { DisputesPage };
