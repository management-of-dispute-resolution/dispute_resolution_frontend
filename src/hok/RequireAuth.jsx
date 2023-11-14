import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hook/useAuth';
import Preloader from '../components/Preloader/Preloader';

const RequireAuth = ({ children }) => {
	const { isLoggedIn, checkAuth, isBooted } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		checkAuth();
		/* eslint-disable-next-line */
	}, [ isLoggedIn,navigate]);

	if(isBooted) {
		return !isLoggedIn ? <Navigate to="/login" /> : children;
	}
	 return <Preloader />

};

export { RequireAuth };

RequireAuth.propTypes = {
	children: PropTypes.element.isRequired,
};
