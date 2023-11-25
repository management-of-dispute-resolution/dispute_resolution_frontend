import React from 'react';
import PropTypes from 'prop-types';
import './ListMessageComments.css';
import MessageComments from '../MessageComments/MessageComments';

function ListMessageComments({ comments }) {
	return (
		<section className="comments">
			{[...comments].reverse().map((comment) => (
				<MessageComments
					{...comment}
					key={comment.id}
					name={comment.sender.last_name}
					role={comment.sender.role}
					date={comment.date}
					text={comment.content}
					files={comment.file}
				/>
			))}
		</section>
	);
}
ListMessageComments.propTypes = {
	comments: PropTypes.instanceOf(Array),
};

ListMessageComments.defaultProps = {
	comments: [],
};

export default ListMessageComments;
