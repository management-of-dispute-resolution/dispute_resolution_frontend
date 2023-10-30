import React from 'react';
import PropTypes from 'prop-types';
import './CommentForm.css';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

function CommentForm({ user }) {
	return (
		<div className="comment-form">
			<div className="user-avatar">
				<p className="user-name">{user?.lastName[0] ?? ''}</p>
			</div>
			<TextArea rows={1} error="" />
			<Button size="micro" color="transperent" type="button" before="send" />
		</div>
	);
}

CommentForm.propTypes = {
	user: PropTypes.objectOf(CommentForm),
};

CommentForm.defaultProps = {
	user: {},
};

export default CommentForm;
