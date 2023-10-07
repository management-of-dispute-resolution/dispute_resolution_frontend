import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

function Checkbox({ label, checked: propChecked, onChange }) {
	const [isChecked, setIsChecked] = useState(propChecked);

	useEffect(() => {
		setIsChecked(propChecked);
	}, [propChecked]);

	const handleCheckboxChange = () => {
		const newChecked = !isChecked;
		setIsChecked(newChecked);
		if (onChange) {
			onChange(newChecked);
		}
	};

	return (
		<div className="checkbox-container">
			<input
				type="checkbox"
				className="checkbox-input"
				checked={isChecked}
				onChange={handleCheckboxChange}
				id={label} // Added id to associate label with input
			/>
			<label htmlFor={label} className="checkbox-label">
				<span className={`checkbox-custom ${isChecked ? 'checked' : ''}`} />
				{label}
			</label>
		</div>
	);
}

Checkbox.defaultProps = {
	checked: false,
	onChange: undefined,
};

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};

export default Checkbox;
