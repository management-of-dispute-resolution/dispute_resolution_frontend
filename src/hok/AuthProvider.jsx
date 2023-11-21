import { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import {
	login,
	logout,
	changePassword,
	getUserInfo,
	// getUserIdInfo,
} from '../utils/api/user.api';



import {
	UNAUTHORIZED_ERROR_MESSAGE,
	SERVER_ERROR_MESSAGE,
	SUCCESS_MESSAGE
} from '../config/constants/errors'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const [currentUser, setUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isBooted, setIsBooted] = useState(false);

	const [isPasswordServerError, setIsPasswordServerError] = useState('');

	const [loginStatus, setLoginStatus] = useState('');
	const [loginServerError, setloginServerError] = useState('');
	const [changePasswordStatus, setChangePasswordStatus] = useState('');


	// роверка авторизации
	
	const checkAuth = useCallback(async () => {
	
		if (localStorage.getItem('token')) {

			try{
				const userData = await getUserInfo();
				if (userData) {
					setUser(userData);
					setIsLoggedIn(true);
					setIsBooted(true);
				}
			}
			
			catch(err) {
				if(err.res.status === 401) {
					console.log('Ошибка при получении данных пользователя');
					localStorage.removeItem('token');
					setIsLoggedIn(false);
					setIsLoading(false);
					setIsBooted(true);
				}
				
			}
		}
		else {
			setIsBooted(true);
		}
		setIsLoading(false);
	
		
	}, []);
	// LOGIN
	const signin = async (newUser) => {
		setLoginStatus('')
		setIsLoading(true);
		try {
			const reqData = await login({
				email: newUser.email,
				password: newUser.password,
			});
			if (reqData) {
				localStorage.setItem('token', reqData.auth_token);
				const userData = await getUserInfo();
				setIsLoggedIn(true);
				setUser(userData);
				navigate('disputes');
			}
		} catch (err) {

// можно завязаться толькоо на статус ошибки как бэк поменяет

			if (err.res.status === 401 || err.data.non_field_errors[0].includes('Unable to log in with provided credentials.')) {
				setLoginStatus(UNAUTHORIZED_ERROR_MESSAGE)

			} else{
				setloginServerError(SERVER_ERROR_MESSAGE)
			}
			
			
			
			
		}
		setIsLoading(false);
	};
	// LOGOUT
	const signout = async () => {
		setIsLoading(true);
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
		setIsLoading(false);
	};
	// ИЗМЕНЕНИЕ ПАРОЛЯ
	const handleChangePassword = async (passwordData) => {
		setChangePasswordStatus('')
		try {


			const respChangePass = await changePassword({
				new_password: passwordData.newPassword,
				current_password: passwordData.password
			});


			console.log(respChangePass);

			setChangePasswordStatus(SUCCESS_MESSAGE)
		}


		catch (err) {

			
			if (err.data.current_password[0].includes('Invalid password')
			) {
				console.log("Неверный текущий пароль")
				setIsPasswordServerError("Неправильный пароль")
				setChangePasswordStatus('')
			} else {
				setChangePasswordStatus(SERVER_ERROR_MESSAGE)
			}


		}



	};


	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = {
		currentUser,
		isLoggedIn,
		checkAuth,
		signin,
		signout,
		handleChangePassword,
		isLoading,
		setIsLoading,
		isError,
		setIsError,
		isBooted,
		loginStatus,
		setLoginStatus,
		changePasswordStatus,setChangePasswordStatus,
		setIsPasswordServerError, isPasswordServerError,
		loginServerError, setloginServerError

	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.element.isRequired,
};
