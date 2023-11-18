/* eslint-disable consistent-return */
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

function DisputeCard({
	handleDeleteDispute,
	handleChangeDispute,
	creator,
	description,
	status,
	closed_at: closedAt,
	created_at: CreatedAt,
	files,
	id,
	onClick,
	isDisputePage,
}) {
	const { currentUser } = useAuth();

	function isCreator() {
		return currentUser && currentUser.id === creator.id;
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

	function handleClick(evt) {
		if (!isDisputePage) {
			if (evt.target === evt.currentTarget) {
				onClick(id);
			}
		} else {
			navigate(-1);
		}
	}

	function handleKeyDown(evt) {
		if (evt.key === 'Enter') {
			handleClick(evt);
		}
	}

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
	});

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
						>{`${creator?.first_name} ${creator?.last_name} ${CreatedAt}`}</h2>
						{status === 'closed' ? (
							<p className={closedTimeClasses}>{`Решено: ${closedAt}`}</p>
						) : (
							''
						)}
					</div>
					<p className={disputeTextClasses}>{description}</p>
					<FileList files={files} />
				</div>
				{isDisputePage ? (
					<button onClick={handleClick} className="dispute-card__close">
						{}
					</button>
				) : (
					<>
						{isCreator() && (
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
	), // Если files также является массивом
	onClick: PropTypes.func.isRequired,
	isDisputePage: PropTypes.bool,
};
DisputeCard.defaultProps = {
	closed_at: '',
	isDisputePage: false,
	files: [],
	handleDeleteDispute: undefined,
	handleChangeDispute: undefined,
};

export default DisputeCard;
