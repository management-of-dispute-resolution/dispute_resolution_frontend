import { makeFormDataReq } from './apiPattern';

// Создание дтспута - ПОКА ПРОБЛЕМА
export const createDisputesId = (data) =>
	makeFormDataReq(`/api/disputes/`, 'PUT', data);
