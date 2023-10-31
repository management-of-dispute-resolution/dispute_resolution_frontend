import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import {
	login,
	logout,
	changePassword,
	getUserInfo,
	getUserIdInfo,
} from '../utils/api/user.api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const [currentUser, setUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	// роверка авторизации
	const checkAuth = async () => {
		if (localStorage.getItem('token')) {
			const userId = localStorage.getItem('userId');
			if (userId) {
				try {
					const currentUserById = await getUserIdInfo(userId);
					if (currentUserById) {
						setUser(currentUserById);
						setIsLoggedIn(true);
					}
				} catch (err) {
					console.log(err);
				}
			}
		}
		setIsLoading(false);
	};
	// LOGIN
	const signin = async (newUser) => {
		try {
			const reqData = await login({
				email: newUser.email,
				password: newUser.password,
			});
			if (reqData) {
				localStorage.setItem('token', reqData.auth_token);
				const userData = await getUserInfo();
				localStorage.setItem('userId', userData.id);
				setIsLoggedIn(true);
				setUser(userData);
				navigate('disputes');
			}
		} catch (err) {
			console.error('res Error ', err);
		}
	};
	// LOGOUT
	const signout = async () => {
		try {
			const reqData = await logout();
			if (reqData) {
				setUser({});
				setIsLoggedIn(false);
				localStorage.removeItem('token');
				localStorage.removeItem('userId');
			}
		} catch (err) {
			console.error('res Error', err);
		}
	};
	// ИЗМЕНЕНИЕ ПАРОЛЯ
	const handleChangePassword = async ({ new_password, current_password }) => {
		try {
			const respChangePass = await changePassword({
				new_password,
				current_password,
			});
			console.log('respChangePass', respChangePass);
		} catch (err) {
			console.error('res Error ', err);
		}
	};

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = {
		currentUser,
		isLoggedIn,
		signin,
		signout,
		handleChangePassword,
		checkAuth,
		isLoading,
		setIsLoading,
		isError,
		setIsError,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.element.isRequired,
};
