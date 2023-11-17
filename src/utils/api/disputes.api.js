/* eslint-disable camelcase */
import { makeRequest } from './requestPattern.api';

// Получение всех диспутов - РАБОТАЕТ
export const getDisputes = (params) =>
	makeRequest(`/api/disputes/`, 'GET', undefined, params);

// Получение диспута по id - РАБОТАЕТ
export const getDisputeId = (id) =>
	makeRequest(`/api/disputes/${id}/`, 'GET', undefined);

// Редактирование диспута по id - Замена
export const editDisputeId = ({ id, text }) =>
	makeRequest(`/api/disputes/${id}/`, 'PUT', text);

export const changeStatusDisputeId = ({id, status }) =>
	makeRequest(`/api/disputes/${id}/`, 'PATCH', { status});

// Редактирование диспута по id
export const editPatchDisputeId = ({ id, text }) =>
	makeRequest(`/api/disputes/${id}/`, 'PATCH', text);

export const addOpponentDisputeId = ({ id, add_opponent }) =>
	makeRequest(`/api/disputes/${id}/`, 'PATCH', {add_opponent});

export const changeDataDisputeId = ({ id, data }) =>
		makeRequest(`/api/disputes/${id}/`, 'PATCH', {data});

// Удаление диспута по id - РАБОТАЕТ
export const deleteDisputesId = (id) =>
	makeRequest(`/api/disputes/${id}/`, 'DELETE', undefined);

// Получение комментариев к диспуту по id
export const getComments = (dispute_id) =>
	makeRequest(`/api/disputes/${dispute_id}/comments/`, 'GET', undefined);

// Добавление комментариев к диспуту по id
// export const createComments = ({ dispute_id, content, file }) =>
// 	makeFormDataReq(`/api/disputes/${dispute_id}/comments/`, 'POST', {
// 		content,
// 		file,
// 	});
