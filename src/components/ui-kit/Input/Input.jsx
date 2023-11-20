import './Input.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Input({
	id,
	name,
	label,
	placeholder,
	type,
	value,
	disabled,
	onChange,
	error,
	pattern,
	required,
	minLength,
	maxLength
}) {
	const [isPassword, setIsPassword] = useState(true);
	const [itemType, setItemType] = useState(type);

	let boxClassName = 'input__box';
	if (disabled) {
		boxClassName += ' input__box_disabled';
	} else if (error) {
		boxClassName += ' input__box_red';
	} else {
		boxClassName += ' input__box_active';
	}

	function handleShowPassword() {
		setIsPassword(!isPassword);
		setItemType(isPassword ? 'text' : 'password');
	}

	return (
		<div className="input">
			<div
				className={boxClassName}
			>
				<div className="input__box-with-label">
					<input
						className="input__input"
						id={name}
						name={name}
						placeholder={placeholder}
						type={itemType}
						value={value}
						onChange={onChange}
						disabled={disabled}
						pattern={pattern}
						autoComplete="off"
						required={required}
						minLength={minLength}
						maxLength={maxLength}
					/>
					<label htmlFor={id} className="input__label">
						{label}
					</label>
				</div>
				{type === 'password' && (
					<button
						className={
							isPassword ? 'input__icon input__icon-close-eye' : 'input__icon'
						}
						onClick={handleShowPassword}
						type="button"
					>
						{' '}
					</button>
				)}
			</div>
			<span className="input__error">{error}</span>
		</div>
	);
}

export default Input;
Input.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.oneOf(['text', 'email', 'password']),
	value: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	error: PropTypes.string,
	pattern: PropTypes.string,
	minLength: PropTypes.number,
	maxLength: PropTypes.number,
};

Input.defaultProps = {
	id: '',
	name: '',
	label: '',
	placeholder: '',
	type: 'text',
	value: undefined,
	onChange: undefined,
	disabled: false,
	required: false,
	error: '',
	pattern: undefined,
	minLength: 0,
	maxLength: 64,
};
