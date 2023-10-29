import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { login, logout, getUserInfo } from '../utils/api/user.api';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const [currentUser, setUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const signin = async (newUser) => {
		try {
			const reqData = await login({
				email: newUser.email,
				password: newUser.password,
			});
			if (reqData) {
				localStorage.setItem('token', reqData.auth_token);
				const userData = await getUserInfo();
				console.log(userData);
				setIsLoggedIn(true);
				setUser(userData);
				navigate('disputes');
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	const signout = async () => {
		try {
			const reqData = await logout();
			if (reqData) {
				setUser({});
				setIsLoggedIn(false);
				localStorage.removeItem('token');
			}
		} catch (err) {
			console.error('res Error', err);
		}
	};

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = { currentUser, isLoggedIn, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.element.isRequired,
};
