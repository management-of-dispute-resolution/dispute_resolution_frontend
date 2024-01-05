import React from 'react';
import PropTypes from 'prop-types';
import './FilePreview.css';
import { ImageConfig } from '../../../config/FileIconConfig';

export const FilePreview = ({ item, onDeleteFile, isEditDispute }) => {
	const { name, type } = item;
	// Название без расширения
	const pureName = name.split('.').slice(0, -1).join('.');
	// Расширение файла для выбора картинки превью
	const fileType = type.split('/').pop();

	return (
		<div className="drop-file-preview__item">
			<div className="drop-file-preview__img-wrapper">
				{!isEditDispute && (
					<button
						className="drop-file-preview__delete"
						type="button"
						aria-label="Кнопка удаления вложенного файла"
						onClick={() => onDeleteFile(item)}
					/>
				)}
				<img
					className="drop-file-preview__img"
					src={ImageConfig[fileType]}
					alt="Превью по типу файла"
				/>
			</div>
			<p className="drop-file-preview__name">{pureName}</p>
		</div>
	);
};

FilePreview.propTypes = {
	// TODO: расписать объект
	// eslint-disable-next-line react/forbid-prop-types
	item: PropTypes.object.isRequired,
	onDeleteFile: PropTypes.func.isRequired,
	isEditDispute: PropTypes.bool.isRequired,
};
