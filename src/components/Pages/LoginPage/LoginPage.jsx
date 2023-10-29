import React from 'react';
import LoginForm from '../../ui-kit/LoginForm/LoginForm';

import { useAuth } from '../../../hook/useAuth';

const LoginPage = () => {
	const { signin } = useAuth();

	const handleLogin = (data) => {
		console.log('Login');
		signin(data);
	};

	return <LoginForm onLogin={handleLogin} />;
};

export { LoginPage };
