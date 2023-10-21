import React from 'react';
import PropTypes from 'prop-types';
import DisputeCard from '../DisputeCard/DisputeCard';
import './DisputeCardList.css';

function DisputeCardList({ massive }) {
	return (
		<div className="dispute-cardlist">
			{massive.map((card) => (
				<DisputeCard
					key={card.id} // Обязательно указывайте уникальный ключ при отображении списков компонентов
					title={card.title}
					content={card.content}
					status={card.status}
					statusDate={card.statusDate}
					dateOfCreation={card.dateOfCreation}
					files={card.files}
					id={card.id}
				/>
			))}
		</div>
	);
}
DisputeCardList.propTypes = {
	massive: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			content: PropTypes.string,
			status: PropTypes.string,
			statusDate: PropTypes.string,
			dateOfCreation: PropTypes.string,
			files: PropTypes.arrayOf(PropTypes.string), // Если files также является массивом
		})
	),
};

DisputeCardList.defaultProps = {
	massive: [],
};
export default DisputeCardList;
