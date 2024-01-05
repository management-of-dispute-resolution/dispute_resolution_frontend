import React from 'react';
import PropTypes from 'prop-types';
import DisputeCard from '../DisputeCard/DisputeCard';
import './DisputeCardList.css';

function DisputeCardList({
	disputesList,
	onClick,
	handleChangeDispute,
	handleDeleteDispute,
}) {
	return (
		<div className="dispute-cardlist">
			{disputesList.length > 0 ? (
				disputesList.map((card) => (
					<DisputeCard
						key={card.id} // Обязательно указывайте уникальный ключ при отображении списков компонентов
						creator={card.creator}
						opponent={card.opponent}
						description={card.description}
						status={card.status}
						closed_at={card.closed_at}
						created_at={card.created_at}
						last_comment={card.last_comment}
						files={card.file}
						id={card.id}
						onClick={onClick}
						handleChangeDispute={handleChangeDispute}
						handleDeleteDispute={handleDeleteDispute}
					/>
				))
			) : (
				<p className="dispute-cardlist__empty">Обращений пока нет</p>
			)}
		</div>
	);
}
DisputeCardList.propTypes = {
	disputesList: PropTypes.arrayOf(
		PropTypes.shape({
			creator: PropTypes.shape({
				email: PropTypes.string,
				id: PropTypes.number,
				first_name: PropTypes.string,
				last_name: PropTypes.string,
				phone_number: PropTypes.string,
				role: PropTypes.string,
			}),
			description: PropTypes.string,
			status: PropTypes.string,
			closed_at: PropTypes.string,
			created_at: PropTypes.string,
			files: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.number.isRequired,
					filename: PropTypes.string.isRequired,
					file: PropTypes.string.isRequired,
				})
			),
		})
	),
	onClick: PropTypes.func.isRequired,
	handleChangeDispute: PropTypes.func.isRequired,
	handleDeleteDispute: PropTypes.func.isRequired,
};

DisputeCardList.defaultProps = {
	disputesList: [],
};
export default DisputeCardList;
