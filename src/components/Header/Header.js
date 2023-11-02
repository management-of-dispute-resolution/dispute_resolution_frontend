import './Header.css';
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../ui-kit/Button/Button';
import Menu from '../ui-kit/Menu/Menu';

function Header({
	isLogged,
	user,
	handleCreateDispute,
	handleChangePassword,
	handleSignOut,
}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const useOutsideClick = (closeMenu) => {
		const ref = useRef();

		useEffect(() => {
			if (!isMenuOpen) {
				return () => {};
			}
			const handleClick = (event) => {
				if (ref.current && !ref.current.contains(event.target)) {
					closeMenu();
					event.stopPropagation();
				}
			};

			document.addEventListener('click', handleClick, true);

			return () => {
				document.removeEventListener('click', handleClick, true);
			};
		});

		return ref;
	};

	const menuRef = useOutsideClick(toggleMenu);

	//   const buttobRef = useOutsideClick();

	return (
		<>
			{isLogged ? (
				<header className="header">
					<div className="header__logo" />
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
									onClick={handleSignOut}
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
	handleSignOut: PropTypes.func,
};

Header.defaultProps = {
	isLogged: true,
	user: {
		firstName: 'Сотрудник',
		lastName: 'Тестовый',
	},
	handleCreateDispute: undefined,
	handleChangePassword: undefined,
	handleSignOut: undefined,
};
