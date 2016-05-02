import React from 'react';
// import classNames from 'classnames';

const Result = ({
	score,
	status
}) => {
	// define when to show it
	var classes;
	if (status === 'end') {
		classes = '';
	} else {
		classes = 'hide';
	}

	return (
		<section id="result-message" className={classes}>
			<h3>{score.lastWinner.charAt(0).toUpperCase() + score.lastWinner.slice(1) + ' won!'}</h3>
		</section>
	)
};

Result.propTypes = {
	score: React.PropTypes.object.isRequired,
	status: React.PropTypes.string.isRequired
};

export default(
	Result
);
