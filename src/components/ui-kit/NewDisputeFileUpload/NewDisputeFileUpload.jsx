import React, { useState } from 'react';
import PropTypes from 'prop-types';

import uploadImg from '../../../Images/Logo_upload.svg';

import './NewDisputeFileUpload.css';
import { MAX_FILES_SIZE, MAX_QUANTITY_FILES } from '../../../config/constants/variable.constants';

export const NewDisputeFileUpload = ({ fileList, updateFileList }) => {

	const [freeSize, setFreeSize] = useState(10); // Объем свободного места
	// const [isErrorSize, setIsErrorSize] = useState(false); // Ошибка: превышение MAX_FILES_SIZE
	// const [isErrorQuantity, setIsErrorQuantity] = useState(false); // Ошибка: превышено допустимое количество файлов

	// Для объекта File - перевод bytes в Мб(число)
	const formatBytes = (bytes) => {
		if (!+bytes) return 0;
		const kb = 1024;
		const mb = kb ** 2;
		return parseFloat((bytes / mb).toFixed(2));
	};
	// Проверка объема файлов для загрузки
	const handleUsedSize = (updatedList) => {
		const usedSpaceArr = [];
		if (updatedList.length === 0) {
			return;
		}
		updatedList.forEach((item) => {
			usedSpaceArr.push(formatBytes(item.size));
		});
		const usedSpace = usedSpaceArr.reduce((res, item) => res + item);
		if (usedSpace >= MAX_FILES_SIZE) {
			// setIsErrorSize(true);
			return;
		}
		const freeSpace =
			Math.round((MAX_FILES_SIZE - usedSpace + Number.EPSILON) * 100) / 100;
		setFreeSize(freeSpace);
	};

	// Создание массива файлов для загрузки
	const handleFileDrop = (evt) => {
		const newFile = Array.from(evt.target.files);
		if (newFile) {
			const excessFiles = fileList.length + newFile.length - MAX_QUANTITY_FILES;
			if (excessFiles > 0) {
				newFile.splice(-excessFiles, excessFiles)
			}
			const updatedList = [...fileList, ...newFile];
			handleUsedSize(updatedList);

			if (updatedList.length > MAX_QUANTITY_FILES) {
				// setIsErrorQuantity(true);
				return;
			}
			updateFileList(updatedList);
		}
	};

	return (
		<div className="new-dispute-file__drop-zone">
			<img
				className="new-dispute-file__drop-zone-logo"
				src={uploadImg}
				alt=""
			/>
			<p className="new-dispute-file__drop-zone-text">
				Перетащите файлы сюда или нажмите, чтобы загрузить
			</p>
			<p className="new-dispute-file__drop-zone-text">
				{`Осталось: ${freeSize} MB`}
			</p>
			<input
				className={`new-dispute-file__drop-zone-input ${(fileList.length >= MAX_QUANTITY_FILES) ? 'cursor_default' : ''}`}
				type="file"
				value=""
				accept="image/jpeg,image/png,application/pdf"
				multiple
				onChange={handleFileDrop}
				disabled={fileList.length >= MAX_QUANTITY_FILES}
			/>
		</div>
	);
};

NewDisputeFileUpload.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	fileList: PropTypes.arrayOf(PropTypes.object).isRequired,
	updateFileList: PropTypes.func.isRequired,
};
