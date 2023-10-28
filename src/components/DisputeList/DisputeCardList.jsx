import React from 'react';
import PropTypes from 'prop-types';
import DisputeCard from '../DisputeCard/DisputeCard';
import './DisputeCardList.css';

function DisputeCardList({ array, onClick }) {
	return (
		<div className="dispute-cardlist">
			{array.map((card) => (
				<DisputeCard
					key={card.id} // Обязательно указывайте уникальный ключ при отображении списков компонентов
					creator={card.creator}
					description={card.description}
					status={card.status}
					closed_at={card.closed_at}
					created_at={card.created_at}
					files={card.files}
					id={card.id}
					onClick={onClick}
				/>
			))}
		</div>
	);
}
DisputeCardList.propTypes = {
	array: PropTypes.arrayOf(
		PropTypes.shape({
			creator: PropTypes.string,
			description: PropTypes.string,
			status: PropTypes.string,
			closed_at: PropTypes.string,
			created_at: PropTypes.string,
			files: PropTypes.arrayOf(PropTypes.string), // Если files также является массивом
		})
	),
	onClick: PropTypes.func.isRequired,
};

DisputeCardList.defaultProps = {
	array: [],
};
export default DisputeCardList;
