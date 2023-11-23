import React from 'react';
import PropTypes from 'prop-types';
import './SelectLimit.css';

function SelectLimit({ onLimitChange, limit }) {
	return (
		<div className="custom-select">
			<select
				className="select-dropdown"
				value={limit}
				onChange={(e) => onLimitChange(Number(e.target.value))}
			>
				<option value="5">5</option>
				<option value="10">10</option>
				<option value="50">50</option>
			</select>
			<div className="select-arrow">{}</div>
		</div>
	);
}

SelectLimit.propTypes = {
	onLimitChange: PropTypes.func,
	limit: PropTypes.number,
};

SelectLimit.defaultProps = {
	onLimitChange: () => {},
	limit: 5,
};

export default SelectLimit;
