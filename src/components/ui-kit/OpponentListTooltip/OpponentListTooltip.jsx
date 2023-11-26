/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './OpponentListTooltip.css';

const OpponentListTooltip = ({ opponents }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div
			className="opponents-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{`группой `}
			{isHovered && opponents.length > 0 && (
				<div className="opponents-tooltip">
					<ul
						className="opponents__list
					list-stile-scroll"
					>
						{opponents.map((opponent) => (
							<li
								className="opponents__item"
								key={opponent.id}
							>{`${opponent.first_name} ${opponent.last_name[0]}.`}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default OpponentListTooltip;
