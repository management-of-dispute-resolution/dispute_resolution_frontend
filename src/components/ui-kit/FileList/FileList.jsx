import React from 'react';
import PropTypes from 'prop-types';
import { ImageConfig } from './config'; // Импортируйте конфигурацию изображений
import './FileList.css';

function FileList({ files, type }) {
	return (
		<div className={`files files_type_${type}`}>
			{files.map((item) => {
				// const nameWithFormat = file.split('/').pop();
				// const format = nameWithFormat.split('.').pop();
				// const name = nameWithFormat.split('.')[0]; // Извлекаем только название файла
				// const downloadLink = files;

				// Правка под формат бекенда
				const nameWithFormat = item.file.split('/').pop();
				const format = nameWithFormat.split('.').pop();
				const name = item.filename; 
				const downloadLink = item.file;

				return (
					<a
						className="file"
						href={downloadLink}
						target="_blank"
						rel="noreferrer"
						key={item}
					>
						<img className="file__icon" src={ImageConfig[format]} alt="File" />
						<p className="file__name">{name}</p>
					</a>
				);
			})}
		</div>
	);
}
FileList.propTypes = {
	files: PropTypes.arrayOf(PropTypes.string),
	type: PropTypes.PropTypes.oneOf(['dispute', 'message']),
};
FileList.defaultProps = {
	files: [],
	type: 'dispute',
};

export default FileList;
