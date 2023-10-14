import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './LinkLogon.css';
import PropTypes from 'prop-types';

function LinkLogon({ label, url }) {
	return (
		<BrowserRouter>
			<Link to={url} className="forget-password__link">
				{label}
			</Link>
		</BrowserRouter>
	);
}

LinkLogon.propTypes = {
	label: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
export default LinkLogon;
