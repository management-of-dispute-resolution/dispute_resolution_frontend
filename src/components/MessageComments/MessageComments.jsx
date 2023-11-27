import React from 'react';
import clsx from 'clsx';
import './MessageComments.css';
import PropTypes from 'prop-types';
import FileList from '../ui-kit/FileList/FileList';
import formatDate from '../../utils/formatDate';

function MessageComments({
	first_name,
	last_name,
	role,
	date,
	text,
	files,
	isDisputePage,
}) {
	const messageClasses = clsx('message__text', {
		'message__text_one-line': !isDisputePage && role === 'mediator',
		'message__text_two-lines': !isDisputePage && role !== 'mediator',
	});

	const userTitle =
		role === 'mediator'
			? `Медиатор ${first_name}`
			: `${last_name} ${first_name[0]}.`;
	const formatedDate = formatDate(date, true);

	const fileListType = isDisputePage ? 'dispute' : 'message';

	return (
		<div className="message">
			<div
				className={`message__icon ${
					role === 'mediator' && 'message__icon_mediator'
				}`}
			>
				<p className="message__icon message__icon_letter">{first_name[0]}</p>
			</div>
			<div className="message__container">
				<div className="message__heading">
					<h2 className="message__heading message__heading_name">
						{userTitle}
					</h2>
					<p className="message__heading message__heading_date">
						{formatedDate}
					</p>
				</div>
				<p className={messageClasses}>{text}</p>
				<div className="message__list-documents">
					<FileList files={files} type={fileListType}/>
				</div>
			</div>
		</div>
	);
}

MessageComments.propTypes = {
	first_name: PropTypes.string,
	last_name: PropTypes.string,
	role: PropTypes.string,
	date: PropTypes.string,
	text: PropTypes.string,
	files: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			filename: PropTypes.string.isRequired,
			file: PropTypes.string.isRequired,
		})
	),
	isDisputePage: PropTypes.bool,
};

MessageComments.defaultProps = {
	first_name: '',
	last_name: '',
	role: '',
	date: '',
	text: '',
	files: [],
	isDisputePage: false,
};
export default MessageComments;
