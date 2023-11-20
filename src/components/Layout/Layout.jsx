import { Outlet, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import './Layout.css';
import { useAuth } from '../../hook/useAuth';
import PasswordChangeForm from '../ui-kit/PasswordChangeForm/PasswordChangeForm';


const Layout = ({ handleCreateDispute }) => {
	const { isLoggedIn, currentUser, signout, changePasswordStatus, handleChangePassword, setChangePasswordStatus } = useAuth();

	const [styleList, setStyleList] = useState('');

	const location = useLocation();
	const { pathname } = location;
	
	const [isPasswordFormOpen, setPasswordFormOpen] = useState(false);
	
	const openChangePasswordForm = () => {
		setPasswordFormOpen(true)
		setChangePasswordStatus('')
	
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
				onSignOut={signout}
				openChangePasswordForm={openChangePasswordForm}
			/>
			<PasswordChangeForm isOpen={isPasswordFormOpen} onClose={closeChangePasswordForm} statusMessage={changePasswordStatus} handleChangePassword={handleChangePassword}/>
			<main className={`layout__container align-flex-center ${styleList}`}>

				<Outlet />
			</main>
		</>
	);
};

export { Layout };

Layout.propTypes = {
	handleCreateDispute: PropTypes.func,
	
};

Layout.defaultProps = {
	handleCreateDispute: undefined,
	
};
