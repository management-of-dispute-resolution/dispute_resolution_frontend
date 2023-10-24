import PropTypes from 'prop-types';
import React from 'react';
import './Menu.css';
import Button from '../Button/Button';

function Menu({ isOpen, firstButton, secondButton }) {
	console.log(firstButton.size);
	return (
		isOpen && (
			<nav className="menu">
				<ul className="menu__links">
					<div className="triangle" />
					<li className="menu__link-item">
						<Button
							size={firstButton.size}
							label={firstButton.label}
							color={firstButton.color}
							type={firstButton.type}
							before={firstButton.before}
						/>
					</li>
					<li className="menu__link-item">
						<Button
							size={secondButton.size}
							label={secondButton.label}
							color={secondButton.color}
							type={secondButton.type}
							before={secondButton.before}
						/>
					</li>
				</ul>
			</nav>
		)
	);
}

export default Menu;
Menu.propTypes = {
	isOpen: PropTypes.bool,
	firstButton: PropTypes.shape({
		size: PropTypes.string,
		label: PropTypes.string,
		color: PropTypes.string,
		type: PropTypes.string,
		before: PropTypes.string,
	}),
	secondButton: PropTypes.shape({
		size: PropTypes.string,
		label: PropTypes.string,
		color: PropTypes.string,
		type: PropTypes.string,
		before: PropTypes.string,
	}),
};

Menu.defaultProps = {
	isOpen: false,
	firstButton: {
		size: 'small',
		label: '',
		color: 'transperent',
		type: 'button',
		before: '',
	},
	secondButton: {
		size: 'small',
		label: '',
		color: 'transperent',
		type: 'button',
		before: '',
	},
};
