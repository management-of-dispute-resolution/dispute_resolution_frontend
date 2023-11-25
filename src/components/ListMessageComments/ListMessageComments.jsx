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
					last_name={comment.sender.last_name}
					first_name={comment.sender.first_name}
					role={comment.sender.role}
					date={comment.created_at}
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
