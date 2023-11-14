/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CommentForm.css';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

function CommentForm({ user, onSend }) {
	const [commentData, setCommentData] = useState({content: ''}); 
	
	const handleCommentChange = (evt) => {
		const {value} = evt.target;
		setCommentData((prev) => ({ ...prev, 'content': value }));
	}
	const handleSend = () => {
		onSend(commentData); 
	};

	return (
		<div className="comment-form">
			<div className="user-avatar">
				<p className="user-name">{user.last_name[0] ?? ''}</p>
			</div>
			<TextArea rows={1} error="" value={commentData.content} handleChange = {handleCommentChange}/>
			<Button
				size="micro"
				label=""
				color="transperent"
				type="button"
				before="send"
				onClick={handleSend}
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
