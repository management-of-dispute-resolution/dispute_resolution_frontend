import React, { useState } from 'react';

import './NewDisputeForm.css';

import { FilePreview } from '../FilePreview/FilePreview';
import { NewDisputeOpponents } from '../NewDisputeOpponents/NewDisputeOpponents';
import { NewDisputeExplanation } from '../NewDisputeExplanation/NewDisputeExplanation';
import { NewDisputeFileUpload } from '../NewDisputeFileUpload/NewDisputeFileUpload';

const NewDisputeForm = () => {
	const [fileList, setFileList] = useState([]); // Массив файлов для загрузки

	const [disputeText, setDisputeText] = useState({}); // Суть конфликта
	const [selectedOpponents, setSelectedOpponents] = useState([]); // Массив выбранных опонентов
	const handleSetSelectedOpponents = (updateOpponentsList) => {
		setSelectedOpponents(updateOpponentsList);
	};

	// Сохранение значения поля "Суть конфликта" в отдельный стейт
	const handleNewDisputeTextChange = (evt) => {
		const { name, value } = evt.target;
		setDisputeText((prev) => ({ ...prev, [name]: value }));
	};

	const updateFileList = (updatedList) => {
		setFileList(updatedList);
	};

	// Удаление файла из массива для загрузки
	const handleDeleteFile = (item) => {
		const updatedList = [...fileList];
		updatedList.splice(fileList.indexOf(item), 1);
		setFileList(updatedList);
	};

	return (
		<div className="new-dispute-form">
			<div className="new-dispute-form__container">
				{/* Блок выбора оппонентов */}
				<div className="new-dispute-opponents new-dispute-form__item-wrapper">
					<div className="new-dispute-form__item-title-wrapper">
						<div className="new-dispute-form__item-title">Оппоненты*</div>
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
						<div className="new-dispute-form__item-title">Суть конфликта*</div>
					</div>
					<NewDisputeExplanation
						newDisputeText={disputeText.newDisputeText}
						handleNewDisputeTextChange={handleNewDisputeTextChange}
					/>
				</div>

				{/* Блок рабооты с файлами */}
				<div className="new-dispute-file new-dispute-form__item-wrapper">
					<div className="new-dispute-form__item-title-wrapper_large">
						<h3 className="new-dispute-form__item-title">Прикрепите файлы</h3>
						<p className="new-dispute-form__item-title new-dispute-form__item-title_subtext">
							Допустимый формат: JPG, PDF
						</p>
					</div>
					<NewDisputeFileUpload
						fileList={fileList}
						updateFileList={updateFileList}
					/>
				</div>
				{/* Блок кнопки submit'а и выбранных файлов */}
				<div className="new-dispute-footer new-dispute-form__item-wrapper">
					<span />
					<div className="new-dispute-footer__used-zone">
						<button className="new-dispute-footer___button" type="button">
							Отправить
						</button>
						{/* Отображение загруженных файлов */}
						{fileList.length > 0 ? (
							<div className="file-preview">
								{fileList.map((item, index) => (
									<FilePreview
										item={item}
										index={index}
										onDeleteFile={handleDeleteFile}
									/>
								))}
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

NewDisputeForm.propTypes = {
	// onFileChange: PropTypes.func
};

export default NewDisputeForm;
