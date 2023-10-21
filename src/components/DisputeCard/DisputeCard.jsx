import React from 'react';
import './DisputeCard.css';
import PropTypes from 'prop-types';

import { statusConfig, ImageConfig } from './config';

function DisputeCard({
	title,
	content,
	status,
	statusDate,
	dateOfCreation,
	files,
	id,
}) {
	// это нужно только чтобы прокинуть id, иначе eslint ругается
	const identifier = id;
	console.log(identifier);
	return (
		<div className="dispute-card">
			<div className="dispute-card__container">
				<div
					className={[
						`dispute-card__status dispute-card__status_type_${status}`,
					]}
				>
					{statusConfig[status]}
				</div>
				<div className="dispute-card__content">
					<div className="dispute-card__header">
						<h2 className="dispute-card__title">{`${title} ${dateOfCreation}`}</h2>
						{status === 'resolved' ? (
							<p className="dispute-card__resolved-time">{`Решено: ${statusDate}`}</p>
						) : (
							''
						)}
					</div>
					<p className="dispute-card__text">{content}</p>
					<div className="dispute-card__files">
						{files.map((file) => {
							const name = file.split('/').pop();
							const format = name.split('.').pop();
							const downloadLink = files;
							return (
								<a
									className="dispute-card__file-link"
									href={downloadLink}
									// я не представляю, что ещё можно использовать в качестве уникального ключа в этом случае
									key={file}
								>
									<img
										className="dispute-card__file"
										src={ImageConfig[format]}
										alt="File"
									/>
									<p className="dispute-card__filename">{name}</p>
								</a>
							);
						})}
					</div>
				</div>
				<button className="dispute-card__option">{}</button>
			</div>
		</div>
	);
}

DisputeCard.propTypes = {
	title: PropTypes.string.isRequired,
	status: PropTypes.oneOf(['resolved', 'inСonsideration', 'notConsidered'])
		.isRequired,
	content: PropTypes.string.isRequired,
	statusDate: PropTypes.string,
	dateOfCreation: PropTypes.string,
	files: PropTypes.arrayOf(PropTypes.string),
	id: PropTypes.number.isRequired,
};
DisputeCard.defaultProps = {
	statusDate: '',
	dateOfCreation: '',
	files: [],
};

export default DisputeCard;
