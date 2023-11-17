import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './NewDisputeOpponents.css';
import { NewDisputeOpponentsModal } from './NewDisputeOpponentsModal/NewDisputeOpponentsModal';
import { getUsers } from '../../../utils/api/user.api';

export const NewDisputeOpponents = ({
	selectedOpponents, // Стейт уже выбранных
	handleSetSelectedOpponents, // Возвращаем новый стейт выбранных
}) => {
	// Модалка выбора оппонента
	const [chooseOpponentModal, setChooseOpponentModal] = useState(false);
	// Промежуточный стейт показа оппонентов
	const [searchOpponent, setSearchOpponent] = useState([]);
	// Стейт инпута оппонентов
	const [opponentsInput, setOpponentsInput] = useState({});

	// Сортировка объекта
	const sortObjOpponents = (dataObj) => {
		dataObj.sort(
			(a, b) =>
				a.last_name.localeCompare(b.last_name) ||
				a.first_name.localeCompare(b.first_name)
		);
		return dataObj;
	};

	// Открытие модалки с выбором опонента
	const handleChangeOpponentsInput = async (evt) => {
		const { name, value } = evt.target;
		setOpponentsInput((prev) => ({ ...prev, [name]: value }));
		if (!value || value?.length < 3) {
			setChooseOpponentModal(false);
			return;
		}
		setChooseOpponentModal(true);
		const findUserApi = await getUsers({ queryParam: 'search', value })
		const findUser = findUserApi.reduce((acc, cur) => {
			if (!selectedOpponents.find(item => item.id === cur.id)) {
				acc.push(cur);
			}
			return acc;
		}, [])
		setSearchOpponent(sortObjOpponents(findUser));
	};

	// Закрыть модальное окно с выбором оппонентов
	const handleCloseOpponentsModal = () => {
		setOpponentsInput(''); // Очищаем инпут
		setChooseOpponentModal(false); // Закрываем модалку
		document.getElementById('new-dispute-opponents__input').focus(); // Устанавливаем фокус на инпуте для дальнейшего выбора
	};

	// Добавить оппонента
	const handleAddOpponent = (user) => {
		handleSetSelectedOpponents([...selectedOpponents, user]); // обновляем стейт выбранных оппонентов
		handleCloseOpponentsModal();
	};

	// Удалить оппонента из выбранных
	const handleDeleteOpponent = (user) => {
		const updatedList = selectedOpponents.filter((item) => item.id !== user.id); // фильтруем стейт выбранных
		handleSetSelectedOpponents(updatedList); // Обновляем стейт
	};

	return (
		<div
			className={`new-dipute-opponents__choice ${chooseOpponentModal && 'new-dipute-opponents__choice_opened'
				}`}
		>
			{/* Выбранные опоненты */}
			{selectedOpponents && selectedOpponents.length > 0
				? selectedOpponents.map((item) => (
					<div
						key={`${item.first_name} ${item.last_name}`}
						className="new-dispute-opponents__selected-item"
					>
						<div className="new-dispute-opponents__selected-name">
							{`${item.first_name} ${item.last_name}`}
						</div>
						<button
							className="new-dispute-opponents__selected-button"
							type="button"
							alt="Удалить оппонента"
							onClick={() => handleDeleteOpponent(item)}
						/>
					</div>
				))
				: null}
			<div className="new-dispute-opponents__input-frame">
				<div className="new-dispute-opponents__input-section">
					<input
						id="new-dispute-opponents__input"
						className="new-dispute-opponents__input"
						name="opponents"
						value={opponentsInput.opponents || ''}
						type="text"
						onChange={handleChangeOpponentsInput}
					/>
				</div>
			</div>
			{/* Модалка выбор оппонента */}
			<div className="new-dipute-opponents__choice-glue-modal">
				<NewDisputeOpponentsModal
					searchOpponent={searchOpponent}
					chooseOpponentModal={chooseOpponentModal}
					handleAddOpponent={handleAddOpponent}
					handleCloseOpponentsModal={handleCloseOpponentsModal}
				/>
			</div>
		</div>
	);
};

NewDisputeOpponents.defaultProps = {
	selectedOpponents: [],
};

NewDisputeOpponents.propTypes = {
	selectedOpponents: PropTypes.arrayOf(
		PropTypes.shape({
			email: PropTypes.string,
			id: PropTypes.number,
			first_name: PropTypes.string,
			last_name: PropTypes.string,
			phone_number: PropTypes.string,
			role: PropTypes.string,
		})
	),
	handleSetSelectedOpponents: PropTypes.func.isRequired,
};
