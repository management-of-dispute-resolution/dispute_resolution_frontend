/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './DisputePage.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import DisputeCard from '../../DisputeCard/DisputeCard';
import ListMessageComment from '../../ListMessageComments/ListMessageComments';
import {
	getDisputeId,
	getComments,
	createComment,
	changeStatusDisputeId,
	deleteDisputesId,
} from '../../../utils/api/disputes.api';
import { getUsers } from '../../../utils/api/user.api';
import { useAuth } from '../../../hook/useAuth';
import Preloader from '../../Preloader/Preloader';
import CommentForm from '../../ui-kit/CommentForm/CommentForm';
import Button from '../../ui-kit/Button/Button';
import { InfoToolTip } from '../../ui-kit/InfoToolTip/InfoToolTip';

const DisputePage = () => {
	const [dispute, setDispute] = useState();
	const [comments, setComments] = useState();
	const [users, setUsers] = useState([]);

	const navigate = useNavigate();
	const { isLoading, setIsLoading, currentUser } = useAuth();
	const { state } = useLocation();
	const { id } = useParams();

	const [info, setInfo] = useState({
		isOpen: false,
		isSuccess: false,
		doneText: '',
		errorText: '',
	});

	const onCloseInfo = () => {
		setInfo((prev) => ({
			...prev,
			isOpen: false,
			isSuccess: false,
			doneText: '',
			errorText: '',
		}));
	};

	const handleSendComment = async (data) => {
		if(dispute.status !== 'started')
		{
			setInfo({
				isOpen: true,
				isSuccess: false,
				doneText: '',
				errorText: 'Нельзя оставлять комментарии до начала диспута',
			});
			return;
		}

		if (!data.content) {
			setInfo({
				isOpen: true,
				isSuccess: false,
				doneText: '',
				errorText: 'Заполните поле комментария',
			});
			return;
		}

		try {
			await createComment(id, data.content, data.file);
			window.location.reload();
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	const handleChangeStatus = async (status) => {
		try {
			await changeStatusDisputeId(id, { status });
			window.location.reload();
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	const handleCloseDispute = async (id, status) => {
		try {
			await changeStatusDisputeId(id, { status });
			await deleteDisputesId(id);
			window.location.reload();
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	const checkAccess = (disputeData) => {
		return currentUser.id === disputeData.creator.id ||
			disputeData.opponent.some((opponent) => currentUser.id === opponent.id) ||
			currentUser.role === 'mediator'
			? true
			: false;
	};

	const goDisputes = () => navigate('/disputes');

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				const disputeData = await getDisputeId(id);
				const commentsData = await getComments(id);
				const usersData = await getUsers();

				setDispute(disputeData);
				setComments(commentsData);
				console.log(commentsData,'commentsData');
				setUsers(usersData);
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
			{/* {state?.createMessage && state.createMessage === 'new' && (
							<button
								 className="close-goDisputes"
								type="button"
								aria-label="Кнопка закрытия модального окна"
								onClick={goDisputes}
							/>
						)} */}
			<section className="dispute-page__card-section">
				{' '}
				<DisputeCard {...dispute} isDisputePage={true} onClick={()=>{}} />
				{/* {state?.createMessage && state.createMessage === 'new' && (
								<h2 className="createdDispute">Обращение создано</h2>
							)} */}
			</section>
			<ListMessageComment comments={comments} />
			<CommentForm user={currentUser} onSend={handleSendComment} />

			{currentUser.role === 'mediator' && (
				<div className="dispute-page__panel">
					<Button
						label="Взять в рассмотрение"
						color="blueLagoon-inverted"
						size="large"
						onClick={() => handleChangeStatus('started')}
						type="button"
					/>
					<Button
						label="Добавить оппонента"
						color="blueLagoon-inverted"
						size="large"
						onClick={() => {}}
						type="button"
					/>
					<Button
						label="Закрыть обращение"
						size="large"
						type="button"
						onClick={() => handleCloseDispute(id, 'not_started')}
					/>
				</div>
			)}

			<InfoToolTip {...info} onClose={onCloseInfo} />
			
		</div>
	);
};

export default DisputePage;
