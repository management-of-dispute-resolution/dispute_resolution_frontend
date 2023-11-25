import React from 'react';
import './MessageComments.css';
import PropTypes from 'prop-types';
import FileList from '../ui-kit/FileList/FileList';
import formatDate from './index';

function MessageComments({ name, role, date, text, files }) {
	return (
		<div className="message">
			<div
				className={`message__icon ${
					role === 'mediator' && 'message__icon_mediator'
				}`}
			>
				<p className="message__icon message__icon_letter">{name[0]}</p>
			</div>
			<div className="message__container">
				<div className="message__heading">
					<h2 className="message__heading message__heading_name">{name}</h2>
					<p className="message__heading message__heading_date">
						{formatDate(date)}
					</p>
				</div>
				<p className="message__text">{text}</p>
				<div className="message__list-documents">
					<FileList files={files} />
				</div>
			</div>
		</div>
	);
}

MessageComments.propTypes = {
	name: PropTypes.string,
	role: PropTypes.string,
	date: PropTypes.string,
	text: PropTypes.string,
	files: PropTypes.arrayOf(
		PropTypes.shape({
			linkFile: PropTypes.string,
			nameFile: PropTypes.string,
		})
	),
};

MessageComments.defaultProps = {
	name: '',
	role: '',
	date: '',
	text: '',
	files: [{ linkFile: '', nameFile: '' }],
};
export default MessageComments;
