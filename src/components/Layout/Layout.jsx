import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import './Layout.css';
import { useAuth } from '../../hook/useAuth';

const Layout = ({ handleCreateDispute, handleChangePassword }) => {
	const { isLoggedIn, currentUser, signout } = useAuth();
	return (
		<>
			<Header
				isLogged={isLoggedIn}
				user={currentUser}
				handleCreateDispute={handleCreateDispute}
				handleChangePassword={handleChangePassword}
				handleSignOut={signout}
			/>

			<main className="layout__container">
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
