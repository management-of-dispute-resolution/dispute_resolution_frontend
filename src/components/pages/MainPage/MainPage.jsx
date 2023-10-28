import React from 'react';
import PropTypes from 'prop-types';
import DisputeCardList from '../../DisputeCardList/DisputeCardList';
import './MainPage.css';

function MainPage({ array, onClick }) {
	return (
		<main className="main">
			<DisputeCardList array={array} onClick={onClick} />
		</main>
	);
}
MainPage.propTypes = {
	array: PropTypes.arrayOf(
		PropTypes.shape({
			creator: PropTypes.string,
			description: PropTypes.string,
			status: PropTypes.string,
			closed_at: PropTypes.string,
			created_at: PropTypes.string,
			files: PropTypes.arrayOf(PropTypes.string), // Если files также является массивом
		})
	),
	onClick: PropTypes.func,
};

MainPage.defaultProps = {
	array: [],
	onClick: () => {},
};
export default MainPage;
