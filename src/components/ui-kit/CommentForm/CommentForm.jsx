import React from 'react';
import PropTypes from 'prop-types';
import './CommentForm.css';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

function CommentForm({ user, onSend }) {

	return (
		<div className="comment-form">
			<div className="user-avatar">
				<p className="user-name">{user.last_name[0] ?? ''}</p>
			</div>
			<TextArea rows={1} error="" />
			<Button
				size="micro"
				label=""
				color="transperent"
				type="button"
				before="send"
				onClick={onSend}
			/>
		</div>
	);
}

CommentForm.propTypes = {
	user: PropTypes.objectOf(CommentForm),
	onSend: PropTypes.func,
};

CommentForm.defaultProps = {
	user: {},
	onSend: () => {},
};

export default CommentForm;
