import React from 'react';
import './DisputePage.css';
import PropTypes from 'prop-types';
import DisputeCard from '../../DisputeCard/DisputeCard';
import ListMessageComment from '../../ListMessageComments/ListMessageComments';

const DisputePage = ({ card, comments }) => (
	<div className="dispute-page">
		<section className="dispute-page__card-section">
			{' '}
			<DisputeCard {...card} />
		</section>
		<ListMessageComment comments={comments} />

		{/* TODO:компонент для добавления комментария */}
		<div className="dispute-page__comment-form" />
	</div>
);

DisputePage.propTypes = {
	card: PropTypes.objectOf(DisputeCard),
	comments: PropTypes.instanceOf(Array),
};

DisputePage.defaultProps = {
	card: {},
	comments: [],
};

export default DisputePage;
