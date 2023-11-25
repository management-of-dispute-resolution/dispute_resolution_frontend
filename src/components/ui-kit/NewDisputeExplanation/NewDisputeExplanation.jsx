import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './NewDisputeExplanation.css';

export const NewDisputeExplanation = ({
	newDisputeText,
	handleNewDisputeTextChange,
	handleValidNewDisputeText,
	errorExplanation
}) => (
	<div className='new-dispute-explanation__container'>
		<textarea
			value={newDisputeText}
			// className="new-dispute-explanation__text"
			className={clsx('new-dispute-explanation__text', {
				'new-dispute-explanation__error': !!errorExplanation
			})}
			name="newDisputeText"
			onBlur={handleValidNewDisputeText}
			minLength={25}
			maxLength={1000}
			onChange={handleNewDisputeTextChange}
			required
		/>
		<span className='new-dispute-explanation__error_text'>
			{errorExplanation}
		</span>
	</div>
);

NewDisputeExplanation.defaultProps = {
	newDisputeText: '',
};
NewDisputeExplanation.propTypes = {
	newDisputeText: PropTypes.string,
	handleNewDisputeTextChange: PropTypes.func.isRequired,
	handleValidNewDisputeText: PropTypes.func.isRequired,
	errorExplanation: PropTypes.string.isRequired,
};
