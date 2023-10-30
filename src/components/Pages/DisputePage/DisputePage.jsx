import React from 'react';
import './DisputePage.css';
import PropTypes from 'prop-types';
import DisputeCard from '../../DisputeCard/DisputeCard';
import ListMessageComment from '../../ListMessageComments/ListMessageComments';
import CommentForm from '../../ui-kit/CommentForm/CommentForm';

const DisputePage = ({ card, comments, user }) => (
	<div className="dispute-page">
		<section className="dispute-page__card-section">
			{' '}
			<DisputeCard {...card} />
		</section>
		<ListMessageComment comments={comments} />
		<CommentForm user={user} />
	</div>
);

DisputePage.propTypes = {
	card: PropTypes.objectOf(DisputeCard),
	comments: PropTypes.instanceOf(Array),
	user: PropTypes.objectOf(DisputeCard),
};

DisputePage.defaultProps = {
	card: {},
	comments: [],
	user: {},
};

export default DisputePage;
