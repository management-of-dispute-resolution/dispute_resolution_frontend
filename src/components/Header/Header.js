import './Header.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../ui-kit/Button/Button';
import Menu from '../ui-kit/Menu/Menu';

function Header({ isLogged }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

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
						/>
						<button className="header__user-avatar" onClick={toggleMenu}>
							<p className="header__user-name">И</p>
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
					<div className="header__menu-container">
						<Menu
							isOpen={isMenuOpen}
							firstButton={
								<Button
									size="small"
									label="Сменить пароль"
									color="transperent"
									type="button"
									before="changePassword"
								/>
							}
							secondButton={
								<Button
									size="small"
									label="Выйти"
									color="transperent"
									type="button"
									before="exit"
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
};

Header.defaultProps = {
	isLogged: true,
};