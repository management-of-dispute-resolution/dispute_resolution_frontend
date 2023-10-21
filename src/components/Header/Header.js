import './Header.css';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/Button';

function Header({ isLogged }) {
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
						<div className="header__icon" />
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
