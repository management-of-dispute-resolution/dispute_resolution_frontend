import { Outlet, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import './Layout.css';
import { useAuth } from '../../hook/useAuth';
import PasswordChangeForm from '../ui-kit/PasswordChangeForm/PasswordChangeForm';


const Layout = ({ handleCreateDispute, handleChangePassword }) => {
	const { isLoggedIn, currentUser, signout, changePasswordStatus } = useAuth();

	const [styleList, setStyleList] = useState('');

	const location = useLocation();
	const { pathname } = location;
	// eslint-disable-next-line no-unused-vars
	const [isPasswordFormOpen, setPasswordFormOpen] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const openChangePasswordForm = () => {
		setPasswordFormOpen(true)
	
	};

	const closeChangePasswordForm = () => {
		setPasswordFormOpen(false)
	
	};


	useEffect(() => {
		// eslint-disable-next-line no-unused-expressions
		pathname.includes('/disputes')
			? setStyleList('list-stile-scroll')
			: setStyleList('');
	}, [pathname]);

	return (
		<>
			<Header
				isLogged={isLoggedIn}
				user={currentUser}
				handleCreateDispute={handleCreateDispute}
				handleChangePassword={handleChangePassword}
				onSignOut={signout}
				openChangePasswordForm={openChangePasswordForm}
			/>
			<PasswordChangeForm isOpen={isPasswordFormOpen} onClose={closeChangePasswordForm} statusMessage={changePasswordStatus} />
			<main className={`layout__container align-flex-center ${styleList}`}>

				<Outlet />
			</main>
		</>
	);
};

export { Layout };

Layout.propTypes = {
	handleCreateDispute: PropTypes.func,
	handleChangePassword: PropTypes.func,
};

Layout.defaultProps = {
	handleCreateDispute: undefined,
	handleChangePassword: undefined,
};
