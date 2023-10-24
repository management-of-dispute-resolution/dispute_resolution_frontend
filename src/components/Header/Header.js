import './Header.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Menu from '../Menu/Menu';

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
						<Button label="Создать обращение" type="button" />
						<div className="header__user-avatar">
							<p className="header__user-name">И</p>
						</div>

						<button
							className="header__menu-button"
							onClick={toggleMenu}
							label="Открыть меню"
						>
							<div className="header__icon" />
						</button>
					</div>
					<div className="header__menu-container">
						<Menu isOpen={isMenuOpen} />
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
