import React, { useState } from 'react';
import PropTypes from 'prop-types';

import uploadImg from '../../../Images/Logo_upload.svg';

import './NewDisputeFileUpload.css';
import { MAX_FILES_SIZE, MAX_QUANTITY_FILES } from '../../../config/constants/variable.constants';

export const NewDisputeFileUpload = ({ fileList, updateFileList, freeSize, setFreeSize }) => {

	// const [freeSize, setFreeSize] = useState(10); // Объем свободного места
	const [errorEx, setErrorEx] = useState(false)
	const [isErrorSize, setIsErrorSize] = useState(false); // Ошибка: превышение MAX_FILES_SIZE
	const [isErrorQuantity, setIsErrorQuantity] = useState(0); // Ошибка: превышено допустимое количество файлов

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
			return 0;
		}
		updatedList.forEach((item) => {
			usedSpaceArr.push(formatBytes(item.size));
		});
		const usedSpace = usedSpaceArr.reduce((res, item) => res + item);
		const freeSpace =
			Math.round((MAX_FILES_SIZE - usedSpace + Number.EPSILON) * 100) / 100;
		return freeSpace;
	};

	// Создание массива файлов для загрузки
	const handleFileDrop = (evt) => {
		const newFile = Array.from(evt.target.files);
		if (newFile) {
			// Проверка на расширение и дубликаты по названию
			const filterEx = []
			newFile.forEach((item) => {
				if (item.type === 'image/jpeg' || item.type === 'application/pdf') {
					if (fileList.length > 0) {
						const findDuplicate = fileList.find((file) => file.name === item.name)
						if (!findDuplicate) {
							filterEx.push(item)
						} else {
							setErrorEx(true)
						}
					} else {
						filterEx.push(item)
					}
				} else {
					setErrorEx(true)
				}
			})

			// Проверка количества файлов
			const excessFiles = fileList.length + filterEx.length - MAX_QUANTITY_FILES;
			if (excessFiles > 0) {
				filterEx.splice(-excessFiles, excessFiles)
				setIsErrorQuantity(excessFiles)
			}
			const updatedList = [...fileList, ...filterEx];
			const filesSpase = handleUsedSize(updatedList);

			if (filesSpase >= 0) {
				setFreeSize(filesSpase)
				updateFileList(updatedList);
			} else if (filesSpase < 0) {
				setIsErrorSize(true)
			}

		}

		setTimeout(() => {
			setErrorEx(false)
			setIsErrorSize(false)
			setIsErrorQuantity(0)

		}, 3000)
	};

	return (
		<div className="new-dispute-file__drop-zone">
			<img
				className="new-dispute-file__drop-zone-logo"
				src={uploadImg}
				alt=""
			/>
			{!errorEx && <p className="new-dispute-file__drop-zone-text">
				Перетащите файлы сюда или нажмите, чтобы загрузить
			</p>}
			{errorEx && <p className='new-dispute-file__drop-zone-text new-dispute-file__drop-zone-error'>
				Файлы с недопустимым расширением и/или дубликаты удалены
			</p>}
			{(isErrorQuantity > 0) && <p className='new-dispute-file__drop-zone-text new-dispute-file__drop-zone-error'>
				Превышено допустимое количество файлов на: {isErrorQuantity}
			</p>}
			{isErrorSize && <p className="new-dispute-file__drop-zone-text new-dispute-file__drop-zone-error">
				Файлы не добавлены. Превышен допустимы объем файлов. Максимум 10Мб
			</p>}
			{!isErrorSize && <p className="new-dispute-file__drop-zone-text">
				{`Осталось: ${freeSize} MB`}
			</p>}
			<input
				className={`new-dispute-file__drop-zone-input ${(fileList.length >= MAX_QUANTITY_FILES) ? 'cursor_default' : ''}`}
				type="file"
				value=""
				accept="image/jpeg,application/pdf"
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
	freeSize: PropTypes.number.isRequired,
	setFreeSize: PropTypes.func.isRequired,
};
