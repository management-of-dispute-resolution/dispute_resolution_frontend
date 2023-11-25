import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';
import './DisputeCard.css';
import PropTypes from 'prop-types';

import FileList from '../ui-kit/FileList/FileList';
import Menu from '../ui-kit/Menu/Menu';
import Button from '../ui-kit/Button/Button';
import useOutsideClick from '../../hook/useOutsideClick';
import { useAuth } from '../../hook/useAuth';

import MessageComments from '../MessageComments/MessageComments';

function DisputeCard({
	handleDeleteDispute,
	handleChangeDispute,
	creator,
	description,
	status,
	closed_at: closedAt,
	created_at: createdAt,
	files,
	id,
	onClick,
	isDisputePage,
	opponent,
	last_comment,
}) {
	const { currentUser } = useAuth();

	function isCreator() {
		return currentUser && currentUser.id === creator.id;
	}
	function isMediator() {
		return currentUser.role === 'mediator';
	}

	function isOpponentOrGroup() {
		if (opponent && opponent.length > 1) {
			return 'с группой';
		}
		return `с ${opponent[0].first_name} ${opponent[0].last_name[0]}. `;
	}

	function disputeTitle() {
		if (isCreator()) {
			return `Конфликт ${isOpponentOrGroup()}`;
		}
		if (currentUser && isMediator()) {
			return `${creator?.first_name} ${
				creator?.last_name[0]
			}.:конфликт ${isOpponentOrGroup()}`;
		}
		return `Конфликт с ${creator?.first_name} ${creator?.last_name[0]}. `;
	}

	function formatDate(inputDate, short) {
		const currentDate = new Date();
		const inputDateTime = new Date(inputDate);

		if (short) {
			const options = {
				day: 'numeric',
				month: 'short',
				hour: 'numeric',
				minute: 'numeric',
			};

			return inputDateTime.toLocaleDateString('ru-RU', options);
		}
		const options = {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		};

		if (currentDate.getFullYear() === inputDateTime.getFullYear()) {
			// Если год совпадает, отображаем без года
			options.year = undefined;
		}

		return inputDateTime.toLocaleDateString('ru-RU', options);
	}
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigate = useNavigate();

	const statusInterface = {
		closed: 'Решено',
		not_started: 'Не рассмотрено',
		started: 'В рассмотрении',
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const menuRef = useOutsideClick(isMenuOpen, toggleMenu);

	const disputeCardClasses = clsx('dispute-card', {
		'dispute-card_type_disputePage': isDisputePage,
	});

	const disputeContainerClasses = clsx('dispute-card__container', {
		'dispute-card__container_type_disputePage': isDisputePage,
	});

	const disputeHeaderClasses = clsx('dispute-card__header', {
		'dispute-card__header_type_disputePage': isDisputePage,
	});

	const disputeStatusClasses = clsx(
		`dispute-card__status dispute-card__status_type_${status}`,
		{
			'dispute-card__status_type_disputePage': isDisputePage,
		}
	);
	const disputeContentClasses = clsx(`dispute-card__content`, {
		'dispute-card__content_type_disputePage': isDisputePage,
	});
	const disputeTitleClasses = clsx('dispute-card__title', {
		'dispute-card__title_type_disputePage': isDisputePage,
	});

	const closedTimeClasses = clsx('dispute-card__closed-time', {
		'dispute-card__closed-time_type_disputePage': isDisputePage,
	});

	const disputeTextClasses = clsx('dispute-card__text', {
		'dispute-card__text_type_disputePage': isDisputePage,
		'dispute-card__text_type_disputesPage': !isDisputePage && isMediator(),
	});

	const excludedClasses = [
		disputeCardClasses,
		disputeContainerClasses,
		disputeHeaderClasses,
		disputeStatusClasses,
		disputeContentClasses,
		disputeTitleClasses,
		closedTimeClasses,
		disputeTextClasses,
	];

	function isElementExcluded(evt, classNames) {
		return classNames.some((className) =>
			className
				.split(' ') // Split classes if there are multiple in one string
				.some((singleClass) => evt.target.classList.contains(singleClass))
		);
	}

	function handleClick(evt) {
		if (!isDisputePage) {
			if (isElementExcluded(evt, excludedClasses)) {
				onClick(id);
			}
		} else {
			navigate('/disputes');
		}
	}

	function handleKeyDown(evt) {
		if (evt.key === 'Enter') {
			handleClick(evt);
		}
	}

	const isDisabled = status !== 'not_started';

	return (
		<div className={disputeCardClasses}>
			<div
				className={disputeContainerClasses}
				{...(isDisputePage
					? {}
					: {
							onClick: handleClick,
							onKeyDown: handleKeyDown,
							role: 'link',
							tabIndex: 0,
					  })}
			>
				<div className={disputeStatusClasses}>{statusInterface[status]}</div>
				<div className={disputeContentClasses}>
					<div className={disputeHeaderClasses}>
						<h2
							className={disputeTitleClasses}
						>{`${disputeTitle()} ${formatDate(createdAt)}`}</h2>
						{status === 'closed' ? (
							<p className={closedTimeClasses}>{`Решено: ${formatDate(
								closedAt
							)}`}</p>
						) : (
							''
						)}
					</div>
					<p className={disputeTextClasses}>{description}</p>
					<FileList files={files} />
					{!isDisputePage && last_comment && (
						<div className="dispute-card__last-message">
							<MessageComments
								isDisputePage
								first_name={last_comment.sender.first_name}
								last_name={last_comment.sender.last_name}
								role={last_comment.sender.role}
								date={last_comment.created_at}
								text={last_comment.content}
								files={[]}
							/>
						</div>
					)}
				</div>
				{isDisputePage ? (
					<button onClick={handleClick} className="dispute-card__close">
						{}
					</button>
				) : (
					<>
						{isCreator() && status !== 'closed' && (
							<button onClick={toggleMenu} className="dispute-card__option">
								{}
							</button>
						)}

						<div ref={menuRef} className="dispute-card__option-container">
							<Menu
								isOpen={isMenuOpen}
								firstButton={
									<Button
										size="small"
										label="Редактировать"
										color="transperent"
										type="button"
										before="edit"
										onClick={() => handleChangeDispute(id)}
										disabled={isDisabled}
									/>
								}
								secondButton={
									<Button
										size="small"
										label="Отменить обращение"
										color="transperent"
										type="button"
										before="cancel"
										onClick={() => handleDeleteDispute(id)}
									/>
								}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

DisputeCard.propTypes = {
	id: PropTypes.number.isRequired,
	status: PropTypes.oneOf(['closed', 'started', 'not_started']).isRequired,
	creator: PropTypes.shape({
		email: PropTypes.string,
		id: PropTypes.number,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		phone_number: PropTypes.string,
		role: PropTypes.string,
	}).isRequired,
	opponent: PropTypes.arrayOf(
		PropTypes.shape({
			email: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
			first_name: PropTypes.string.isRequired,
			last_name: PropTypes.string.isRequired,
			phone_number: PropTypes.string.isRequired,
			role: PropTypes.string.isRequired,
		})
	).isRequired,
	description: PropTypes.string.isRequired,
	created_at: PropTypes.string.isRequired,
	handleDeleteDispute: PropTypes.func,
	handleChangeDispute: PropTypes.func,
	closed_at: PropTypes.string,
	files: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			filename: PropTypes.string.isRequired,
			file: PropTypes.string.isRequired,
		})
	),
	onClick: PropTypes.func.isRequired,
	isDisputePage: PropTypes.bool,
	last_comment: PropTypes.shape({
		id: PropTypes.number.isRequired,
		sender: PropTypes.shape({
			first_name: PropTypes.string.isRequired,
			last_name: PropTypes.string.isRequired,
			role: PropTypes.string.isRequired,
		}),
		created_at: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	}),
};
DisputeCard.defaultProps = {
	closed_at: '',
	isDisputePage: false,
	files: [],
	handleDeleteDispute: undefined,
	handleChangeDispute: undefined,
	last_comment: null,
};

export default DisputeCard;
