import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../ui-kit/LoginForm/LoginForm';

import { useAuth } from '../../../hook/useAuth';

const LoginPage = () => {
	const navigate = useNavigate();
	
	const { isLoggedIn, signin, loginStatus } = useAuth();

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/disputes');
		}
	});

	const handleLogin = (data) => {
		signin(data)
	};


	return <LoginForm onLogin={handleLogin} loginStatus={loginStatus} />;

};

export { LoginPage };
