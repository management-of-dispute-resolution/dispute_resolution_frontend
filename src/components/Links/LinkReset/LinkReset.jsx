import React from 'react';
import { Link } from 'react-router-dom';
import './LinkReset.css';
import PropTypes from 'prop-types';

function LinkReset({ label, url }) {
	return (
		<Link to={url} className="link-reset">
			{label}
		</Link>
	);
}

LinkReset.propTypes = {
	label: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
export default LinkReset;
