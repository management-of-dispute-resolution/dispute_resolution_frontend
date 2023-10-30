import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Preloader from '../../Preloader/Preloader';
import { useAuth } from '../../../hook/useAuth';

const CheckLogin = () => {
	const { isLoggedIn, checkAuth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		checkAuth();
		if (isLoggedIn) {
			navigate('/disputes');
		} else {
			navigate('login');
		}
	}, [checkAuth, isLoggedIn, navigate]);

	return (
		<>
			<Preloader />
			<h1>Проверка авторизации</h1>
		</>
	);
};

export default CheckLogin;
