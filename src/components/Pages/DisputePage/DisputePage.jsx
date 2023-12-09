/* eslint-disable */
import './DisputePage.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Preloader from '../../Preloader/Preloader';
import DisputeCard from '../../DisputeCard/DisputeCard';
import ListMessageComment from '../../ListMessageComments/ListMessageComments';
import CommentForm from '../../ui-kit/CommentForm/CommentForm';
import Button from '../../ui-kit/Button/Button';
import { InfoToolTip } from '../../ui-kit/InfoToolTip/InfoToolTip';
import INFO_STATES from '../../../config/constants/massage';

import { useAuth } from '../../../hook/useAuth';
import { handleFormDataRequest } from '../../../utils/api/reqFormDataPattern';
import {
	getDisputeId,
	getComments,
	changeStatusDisputeId,
	addOpponentDisputeId,
} from '../../../utils/api/disputes.api';

const DisputePage = () => {
	const navigate = useNavigate();
	const [dispute, setDispute] = useState();
	const [comments, setComments] = useState();

	const { isLoading, setIsLoading, currentUser } = useAuth();
	const { state } = useLocation();
	const { id } = useParams();

	const [info, setInfo] = useState(INFO_STATES.DEFAULT);

	const onCloseInfo = () => {
		setInfo((prev) => ({ ...prev, ...INFO_STATES.DEFAULT }));
	};

	const handleSendComment = async (data) => {
		if (dispute.status !== 'started') {
			dispute.status === 'closed' && setInfo(INFO_STATES.ALREADY_CLOSED);
			dispute.status === 'not_started' && setInfo(INFO_STATES.NOT_STARTED);
			return;
		}

		const newComment = new FormData();
		newComment.append('content', data.content);
		data.file.forEach((item) => {
			newComment.append('uploaded_files', item);
		});

		try {
			const res = await handleFormDataRequest(
				`/api/disputes/${id}/comments/`,
				'POST',
				newComment
			);

			if(res.content !== data.content) {
				throw new Error(res.content)
			}
			window.location.reload();
		} catch (err) {
			console.error('res Error ', err);
			setInfo({
				...INFO_STATES.GENERAL_ERROR,
				errorText: err || err.status,
			});
		}
	};

	const handleChangeStatus = async (status) => {
		try {
			await changeStatusDisputeId({ id, status });
			setDispute((prev) => ({ ...prev, status }));
		} catch (err) {
			console.error('res Error ', err);
			setInfo({
				...INFO_STATES.GENERAL_ERROR,
				errorText: err.data.detail || err.status,
			});
		}
	};

	const handleAddOpponent = async (id) => {
		try {
			const res = await addOpponentDisputeId({ id, add_opponent: true });
			setDispute((prev) => ({ ...prev, res }));
			setInfo(INFO_STATES.ADD_OPPONENT);
		} catch (err) {
			console.error('res Error ', err);
			setInfo({
				...INFO_STATES.GENERAL_ERROR,
				errorText: err.status,
			});
		}
	};

	const handleCloseDispute = async (status) => {
		try {
			await changeStatusDisputeId({ id, status });
			setDispute((prev) => ({ ...prev, status }));
			setInfo(INFO_STATES.CLOSE_SUCCESS);
		} catch (err) {
			console.error('res Error ', err);
			setInfo({
				...INFO_STATES.GENERAL_ERROR,
				errorText: err.status,
			});
		}
	};

	const checkAccess = (disputeData) => {
		return currentUser.id === disputeData.creator.id ||
			(disputeData.opponent.some(
				(opponent) => currentUser.id === opponent.id
			) &&
				disputeData.add_opponent === true) ||
			currentUser.role === 'mediator'
			? true
			: false;
	};

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				const disputeData = await getDisputeId(id);
				const commentsData = await getComments(id);
				setDispute(disputeData);
				setComments(commentsData);
				if (!checkAccess(disputeData)) {
					throw new Error('Access denied');
				}
			} catch (error) {
				console.error('error:', error);
				navigate('/disputes');
			} finally {
				setIsLoading(false);
			}
		})();
	}, [id, navigate]);

	if (isLoading || !dispute) {
		return <Preloader />;
	}

	return (
		<div className="dispute-page">
			<section className="dispute-page__card-section">
				<DisputeCard
					{...dispute}
					files={dispute.file}
					isDisputePage={true}
					onClick={() => { }}
				/>
				{state?.createMessage && state.createMessage === 'new' && (
					<h2 className="createdDispute">Обращение создано</h2>
				)}
				{state?.createMessage && state.createMessage === 'edit' && (
					<h2 className="createdDispute">Изменения сохранены</h2>
				)}
			</section>
			<ListMessageComment comments={comments} isDisputePage={true} />
			<CommentForm user={currentUser} onSend={handleSendComment} />

			{currentUser.role === 'mediator' && (
				<div className="dispute-page__panel">
					<Button
						label="Взять в рассмотрение"
						color="blueLagoon-inverted"
						size="large"
						onClick={() => handleChangeStatus('started')}
						type="button"
						disabled={dispute.status === 'started'}
					/>
					<Button
						label="Добавить оппонента"
						color="blueLagoon-inverted"
						size="large"
						onClick={() => handleAddOpponent(id)}
						type="button"
						disabled={dispute.status !== 'started' || dispute.add_opponent}
					/>
					<Button
						label="Закрыть обращение"
						size="large"
						type="button"
						onClick={() => handleCloseDispute('closed')}
						disabled={dispute.status !== 'started' || comments.length === 0}
					/>
				</div>
			)}

			<InfoToolTip {...info} onClose={onCloseInfo} />
		</div>
	);
};

export default DisputePage;
