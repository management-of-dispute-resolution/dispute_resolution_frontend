import React from 'react';
import './DisputeCard.css';
import PropTypes from 'prop-types';

import FileList from '../ui-kit/FileList/FileList';

function DisputeCard({
	creator,
	description,
	status,
	closed_at: closedAt,
	created_at: CreatedAt,
	files,
	id,
}) {
	const statusInterface = {
		closed: 'Решено',
		not_started: 'Не рассмотрено',
		started: 'В рассмотрении',
	};

	function handleClick() {
		alert(id);
	}

	function handleKeyDown(evt) {
		if (evt.key === 'Enter') {
			handleClick(evt);
		}
	}

	return (
		<div
			className="dispute-card"
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex="0"
		>
			<div className="dispute-card__container">
				<div
					className={[
						`dispute-card__status dispute-card__status_type_${status}`,
					]}
				>
					{statusInterface[status]}
				</div>
				<div className="dispute-card__content">
					<div className="dispute-card__header">
						<h2 className="dispute-card__title">{`${creator} ${CreatedAt}`}</h2>
						{status === 'closed' ? (
							<p className="dispute-card__closed-time">{`Решено: ${closedAt}`}</p>
						) : (
							''
						)}
					</div>
					<p className="dispute-card__text">{description}</p>
					<FileList files={files} />
				</div>
				<button className="dispute-card__option">{}</button>
			</div>
		</div>
	);
}

DisputeCard.propTypes = {
	id: PropTypes.number.isRequired,
	status: PropTypes.oneOf(['closed', 'started', 'not_started']).isRequired,
	creator: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	created_at: PropTypes.string.isRequired,
	closed_at: PropTypes.string,
	files: PropTypes.arrayOf(PropTypes.string),
};
DisputeCard.defaultProps = {
	closed_at: '',
	files: [],
};

export default DisputeCard;
