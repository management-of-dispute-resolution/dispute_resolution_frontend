import React from 'react';
import PropTypes from 'prop-types';
import { ImageConfig } from '../../../config/FileIconConfig';

import './FileList.css';

function FileList({ files, type }) {
	return (
		<div className={`files files_type_${type}`}>
			{files.map((item) => {
				const name = item.filename;
				const format = item.file.split('.').pop();
				const downloadLink = item.file;
				return (
					<a
						className="file"
						href={downloadLink}
						target="_blank"
						rel="noreferrer"
						key={item.id}
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
	files: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			filename: PropTypes.string.isRequired,
			file: PropTypes.string.isRequired,
		})
	),
	type: PropTypes.oneOf(['dispute', 'message']),
};

FileList.defaultProps = {
	files: {},
	type: 'dispute',
};

export default FileList;
