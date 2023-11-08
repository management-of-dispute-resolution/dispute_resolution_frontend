/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/control-has-associated-label */
import './Header.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../ui-kit/Button/Button';
import Menu from '../ui-kit/Menu/Menu';
import useOutsideClick from '../Hooks/useOutsideClick'

function Header({
	isLogged,
	user,
	handleCreateDispute,
	handleChangePassword,
	onSignOut,
}) {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleGoHome = () => navigate('/');

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const menuRef = useOutsideClick(isMenuOpen, toggleMenu);

	return (
		<>
			{isLogged ? (
				<header className="header">
					<div
						className="header__logo"
						role="button"
						tabIndex={0}
						onClick={handleGoHome}
					/>
					<div className="header__container">
						<Button
							size="medium"
							label="Создать обращение"
							color="downy"
							type="button"
							onClick={handleCreateDispute}
						/>

						<button className="header__user-avatar" onClick={toggleMenu}>
							<p className="header__user-name">{user?.lastName[0] ?? ''}</p>
						</button>

						<button
							className="header__menu-button"
							onClick={toggleMenu}
							label="Открыть меню"
						>
							<div
								className={
									isMenuOpen ? 'header__icon header__icon_up' : 'header__icon'
								}
							/>
						</button>
					</div>
					<div ref={menuRef} className="header__menu-container">
						<Menu
							isOpen={isMenuOpen}
							firstButton={
								<Button
									size="small"
									label="Сменить пароль"
									color="transperent"
									type="button"
									before="changePassword"
									onClick={handleChangePassword}
								/>
							}
							secondButton={
								<Button
									size="small"
									label="Выйти"
									color="transperent"
									type="button"
									before="exit"
									onClick={onSignOut}
								/>
							}
						/>
					</div>
				</header>
			) : (
				<header className="header header__color_white">
					<div className="header__logo header__logo_color_green" />
				</header>
			)}{' '}
		</>
	);
}

export default Header;
Header.propTypes = {
	isLogged: PropTypes.bool,
	user: PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
	}),
	handleCreateDispute: PropTypes.func,
	handleChangePassword: PropTypes.func,
	onSignOut: PropTypes.func,
};

Header.defaultProps = {
	isLogged: true,
	user: {
		firstName: 'Сотрудник',
		lastName: 'Тестовый',
	},
	handleCreateDispute: undefined,
	handleChangePassword: undefined,
	onSignOut: undefined,
};
