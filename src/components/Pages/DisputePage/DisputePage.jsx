import React, { useState, useEffect } from 'react';
import './DisputePage.css';
import { useParams } from 'react-router-dom';
import DisputeCard from '../../DisputeCard/DisputeCard';
import ListMessageComment from '../../ListMessageComments/ListMessageComments';
import { getDisputeId, getComments } from '../../../utils/api/disputes.api';

const DisputePage = () => {
	const [card, setCard] = useState();
	const [comments, setComments] = useState();

	const { id } = useParams();
	console.log('Карточка с комментариями', id);
	// Получение диспута по id
	const getDisputeById = async (cardId) => {
		try {
			const reqData = await getDisputeId(cardId);
			if (reqData) {
				setCard(reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// Получение комментариев к диспуту по id
	const getCommentsById = async (dispute_id) => {
		try {
			const reqData = await getComments(dispute_id);
			if (reqData) {
				setComments(reqData);
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	useEffect(() => {
		getDisputeById(id);
		getCommentsById(id);
	}, [id]);

	return (
		<div className="dispute-page">
			<section className="dispute-page__card-section">
				{' '}
				<DisputeCard {...card} />
			</section>
			<ListMessageComment comments={comments} />

			{/* TODO:компонент для добавления комментария */}
			<div className="dispute-page__comment-form" />
		</div>
	);
};

export default DisputePage;
