import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

function Checkbox({ label, checked, onChange }) {
	const handleCheckboxChange = () => {
		if (onChange) {
			onChange(!checked);
		}
	};

	return (
		<div className="checkbox-container">
			<input
				type="checkbox"
				className="checkbox-input"
				checked={checked}
				onChange={handleCheckboxChange}
				id={label}
			/>
			<label htmlFor={label} className="checkbox-label">
				<span className={`checkbox-custom ${checked ? 'checked' : ''}`} />
				{label}
			</label>
		</div>
	);
}

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};

Checkbox.defaultProps = {
	checked: false,
	onChange: null,
};

export default Checkbox;
