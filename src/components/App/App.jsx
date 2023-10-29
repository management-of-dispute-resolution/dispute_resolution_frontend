/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
import './App.css';
import { React, useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import { InfoToolTip } from '../ui-kit/InfoToolTip/InfoToolTip';
import Header from '../Header/Header';
import LoginForm from '../ui-kit/LoginForm/LoginForm';
import DisputeList from '../DisputeList/DisputeCardList';
import DisputeCard from '../DisputeCard/DisputeCard';
import NewDisputeForm from '../ui-kit/NewDisputeForm/NewDisputeForm';
import mockDisputeData from './mockDisputeData';

import {
	//getUsers,
	//register,
	getUserInfo,
	//getUserIdInfo,
	login,
	logout,
	//changePassword,
} from '../../utils/api/user.api';

function App() {
	const navigate = useNavigate();
	const [popupInfo, setPopupInfo] = useState({
		isOpen: false,
		isSuccess: false,
		doneText: '',
		errorText: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);
	const [currentDisputeId, setCurrentDisputeId] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			setIsLoggedIn(false);
			setIsLoading(false);
			return;
		}

		setIsLoading(true);

		getUserInfo()
			.then((res) => {
				setIsLoggedIn(true);
				console.log(res.data, 'response');
				setCurrentUser(res.data);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	const handleLogin = (value) => {
		setIsLoading(true);
		login({ email: value.Email, password: value.Password })
			.then((res) => {
				localStorage.setItem('token', res.auth_token);
				setIsLoggedIn(true);
				navigate(`disputes`);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleLogout = () => {
		setIsLoading(true);
		logout()
			.then(() => {
				localStorage.removeItem('token');
				setIsLoggedIn(false);
				navigate('/', { replace: true });
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleCardClick = (id) => {
		setCurrentDisputeId(id);
		navigate(`disputes/${id}`);
	};

	const handleNewDisputeClick = () => {
		navigate(`new-dispute`);
	};

	return (
		<div className="App">
			<Header
				isLogged={isLoggedIn}
				handleCreateDispute={handleNewDisputeClick}
				handleSignOut={handleLogout}
			/>

			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<LoginForm onLogin={handleLogin} />} />

				<Route
					path="/disputes"
					element={
						<DisputeList array={mockDisputeData} onClick={handleCardClick} />
					}
				/>

				<Route
					path={`disputes/${currentDisputeId}`}
					element={<DisputeCard id={currentDisputeId} />}
				/>

				<Route path="/new-dispute" element={<NewDisputeForm />} />

				<Route path="*" element={<PageNotFound />} />
			</Routes>

			<InfoToolTip
				isOpen={popupInfo.isOpen}
				onClose={() => setPopupInfo({ ...popupInfo, isOpen: false })}
				isSuccess={popupInfo.isSuccess}
				doneText={popupInfo.doneText}
				errorText={popupInfo.errorText}
			/>
		</div>
	);
}

export default App;
