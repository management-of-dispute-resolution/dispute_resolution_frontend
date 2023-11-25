import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './NewDisputeForm.css';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

import { FilePreview } from '../FilePreview/FilePreview';
import { NewDisputeOpponents } from '../NewDisputeOpponents/NewDisputeOpponents';
import { NewDisputeExplanation } from '../NewDisputeExplanation/NewDisputeExplanation';
import { NewDisputeFileUpload } from '../NewDisputeFileUpload/NewDisputeFileUpload';
import { MAX_QUANTITY_FILES, REG_TEXT } from '../../../config/constants/variable.constants';
import { useAuth } from '../../../hook/useAuth';

const NewDisputeForm = ({
	initialSelectedOpponents,
	initialDisputeText,
	initialFileList,
	handleRequestNewDispute,
	isEditDispute,
}) => {

	const navigate = useNavigate();
	const { setNewCardDispute } = useAuth(); // для сохранения данных в случае закрытия формы и обнуления при сабмите

	const [selectedOpponents, setSelectedOpponents] = useState([]); // Массив выбранных оппонентов
	const [disputeText, setDisputeText] = useState({}); // Суть конфликта
	const [fileList, setFileList] = useState([]); // Массив файлов для загрузки
	const [freeSize, setFreeSize] = useState(10); // Объем свободного места
	const [errorExplanation, setErrorExplanation] = useState(''); // Ошибка максимальная длина текста в описании конфликта

	const [isDisable, setIsDisable] = useState(true); // Стейт диза кнопки

	useEffect(() => {
		if (
			disputeText.newDisputeText === undefined ||
			// disputeText.newDisputeText.length === 0 ||
			disputeText.newDisputeText.length < 25 ||
			selectedOpponents.length === 0
		) {
			setIsDisable(true);
		} else {
			setIsDisable(false);
		}
	}, [disputeText, selectedOpponents]);

	useEffect(() => {
		if (initialSelectedOpponents && initialSelectedOpponents.length > 0) {
			setSelectedOpponents(initialSelectedOpponents);
		}
		if (initialDisputeText) {
			setDisputeText({ newDisputeText: initialDisputeText });
		}
		if (initialFileList && initialFileList.length > 0) {
			setFileList(initialFileList);
		}
	}, [initialDisputeText, initialSelectedOpponents, initialFileList]);

	// Установка стейта выбранных оппонентов
	const handleSetSelectedOpponents = (updateOpponentsList) => {
		setSelectedOpponents(updateOpponentsList);
	};

	// Сохранение значения поля "Суть конфликта" в отдельный стейт
	const handleNewDisputeTextChange = useCallback((evt) => {
		const { name, value } = evt.target;
		if (value.match(REG_TEXT) || value.length === 0) {

			if (value.length >= 1000) {
				setErrorExplanation('Превышено допустимое количество символов: 1000шт. ТЕКСТ СОКРАЩЕН.')
			}
			if (value.length <= 999) {
				setErrorExplanation('')
			}
			setDisputeText((prev) => ({ ...prev, [name]: value }));
		} else {
			setErrorExplanation('Введите корректное опписание конфликта. Допустимые символы - кирилица, латиница и знаки препинания.');
			setTimeout(() => setErrorExplanation(''), 4000)
		}
	}, []);

	const handleValidNewDisputeText = () => {
		if (disputeText.newDisputeText.length < 25) {
			setErrorExplanation('Минимальное количество знаков поля: Описание конфликта - 25.');
		}
	}

	// Установка стейта загружаемых файлов
	const updateFileList = (updatedList) => {
		setFileList(updatedList);
	};

	// Для объекта File - перевод bytes в Мб(число)
	const formatBytes = (bytes) => {
		if (!+bytes) return 0;
		const kb = 1024;
		const mb = kb ** 2;
		return parseFloat((bytes / mb).toFixed(2));
	};

	// Удаление файла из массива для загрузки
	const handleDeleteFile = (item) => {
		const updateFilesSize = freeSize + formatBytes(item.size);
		setFreeSize(updateFilesSize)
		const updatedList = [...fileList];
		updatedList.splice(fileList.indexOf(item), 1);
		setFileList(updatedList);
	};

	const handleCloseNewDispute = () => {
		setNewCardDispute({
			'selectedOpponents': selectedOpponents,
			'disputeText': disputeText.newDisputeText,
			'fileList': fileList
		})
		navigate('/');
	}

	// Формирование данных для отправки на сервер
	const handleSubmit = () => {
		setNewCardDispute({
			'selectedOpponents': [],
			'disputeText': '',
			'fileList': []
		})
		const newDisputeData = new FormData();
		// Добавляем оппонентов
		for (let i = 0; i < selectedOpponents.length; i += 1) {
			newDisputeData.append(`opponent`, selectedOpponents[i].id);
		}
		// Добавляем описание
		newDisputeData.append('description', disputeText.newDisputeText);
		// Добавляем файлы
		const maxFiles = (fileList.length > 4) ? MAX_QUANTITY_FILES : fileList.length
		for (let i = 0; i < maxFiles; i += 1) {
			newDisputeData.append(`uploaded_files`, fileList[i]);
		}
		// Внешняя функция для отвравки запроса на сервер
		handleRequestNewDispute(newDisputeData);
	};

	return (
		<div className="new-dispute-form">
			<div className="new-dispute-form__container">
				<button
					className="new-dispute-form__goBack"
					type="button"
					aria-label="Кнопка goBack"
					onClick={handleCloseNewDispute}
				/>
				{/* Блок выбора оппонентов */}
				<div className="new-dispute-opponents new-dispute-form__item-wrapper">
					<div className="new-dispute-form__item-title-wrapper">
						<div className="new-dispute-form__item-title">Оппоненты</div>
						<p className="new-dispute-form__item-title new-dispute-form__item-title_subtext">
							Один или несколько
						</p>
					</div>
					<NewDisputeOpponents
						selectedOpponents={selectedOpponents}
						handleSetSelectedOpponents={handleSetSelectedOpponents}
					/>
				</div>

				{/* Блок с объяснением сути конфликта */}
				<div className="new-dispute-explanation new-dispute-form__item-wrapper">
					<div className="new-dispute-form__item-title-wrapper_large">
						<div className="new-dispute-form__item-title">
							Описание конфликта
						</div>
					</div>
					<NewDisputeExplanation
						newDisputeText={disputeText.newDisputeText}
						handleNewDisputeTextChange={handleNewDisputeTextChange}
						handleValidNewDisputeText={handleValidNewDisputeText}
						errorExplanation={errorExplanation}
					/>
				</div>

				{/* Блок рабооты с файлами */}
				{!isEditDispute && (
					<div className="new-dispute-file new-dispute-form__item-wrapper">
						<div className="new-dispute-form__item-title-wrapper_large">
							<h3 className="new-dispute-form__item-title">Прикрепите файлы</h3>
							<p className="new-dispute-form__item-title new-dispute-form__item-title_subtext">
								Допустимый формат файлов: JPG, PDF
							</p>
						</div>
						<NewDisputeFileUpload
							fileList={fileList}
							updateFileList={updateFileList}
							freeSize={freeSize}
							setFreeSize={setFreeSize}
						/>
					</div>
				)}

				{/* Блок кнопки submit'а и выбранных файлов */}
				<div className="new-dispute-footer new-dispute-form__item-wrapper">
					<span />
					<div className="new-dispute-footer__used-zone">
						{!isEditDispute ? (
							<Button
								label="Продолжить"
								onClick={handleSubmit}
								size="mlarge"
								disabled={isDisable}
							/>
						) : (
							<Button
								label="Сохранить изменения"
								onClick={handleSubmit}
								size="mlarge"
								disabled={isDisable}
							/>
						)}

						{/* Отображение загруженных файлов */}
						{/* {!isEditDispute && fileList.length > 0 ? ( */}
						<div className="file-preview">
							{fileList.map((item) => (
								<FilePreview
									key={`${item.name}_${item.type}`}
									item={item}
									onDeleteFile={handleDeleteFile}
									isEditDispute={isEditDispute}
								/>
							))}
						</div>
						{/* ) : null} */}
					</div>
				</div>
			</div>
		</div>
	);
};

NewDisputeForm.defaultProps = {
	initialSelectedOpponents: [],
	initialDisputeText: '',
	initialFileList: [],
	isEditDispute: false,
	handleRequestNewDispute: () => { },
};
NewDisputeForm.propTypes = {
	initialSelectedOpponents: PropTypes.arrayOf(
		PropTypes.shape({
			email: PropTypes.string,
			id: PropTypes.number,
			first_name: PropTypes.string,
			last_name: PropTypes.string,
			phone_number: PropTypes.string,
			role: PropTypes.string,
		})
	),
	initialDisputeText: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	initialFileList: PropTypes.arrayOf(PropTypes.object),
	isEditDispute: PropTypes.bool,
	handleRequestNewDispute: PropTypes.func,
};

export default NewDisputeForm;
