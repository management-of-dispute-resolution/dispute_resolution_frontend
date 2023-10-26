import './App.css';
import { React, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Header from '../Header/Header';
import LoginForm from '../ui-kit/LoginForm/LoginForm';
import DisputeList from '../DisputeList/DisputeCardList';
import DisputeCard from '../DisputeCard/DisputeCard';
import mockDisputeData from './mockDisputeData';

function App() {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentDisputeId, setCurrentDisputeId] = useState(111);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};
	const handleCardClick = (id) => {
		setCurrentDisputeId(id);
		navigate(`disputes/${id}`);
	};

	return (
		<div className="App">
			<Header isLogged={isLoggedIn} />

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

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
