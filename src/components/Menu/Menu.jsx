import PropTypes from 'prop-types';
import React from 'react';
import './Menu.css';

function Menu({ isOpen }) {
	return (
		isOpen && (
			<nav className="menu">
				<ul className="menu__links">
					<div className="triangle" />
					<li className="menu__link-item">
						<a href="#project" className="nav__link">
							<div className="nav__link-icon nav__link-icon_type_key" />
							<p className="nav__link-name">Сменить пароль</p>
						</a>
					</li>
					<li className="menu__link-item">
						<a href="#project" className="nav__link">
							<div className="nav__link-icon nav__link-icon_type_exit" />
							<p className="nav__link-name">Выйти</p>
						</a>
					</li>
				</ul>
			</nav>
		)
	);
}

export default Menu;
Menu.propTypes = {
	isOpen: PropTypes.bool,
};

Menu.defaultProps = {
	isOpen: false,
};
