import React from 'react';
// import classNames from 'classnames';

const Result = ({
	score,
	status
}) => {
	// show some cool messages
	const winMessages = [
		'Pity human.. you can\'t compete againt my awesome AI',
		'Another win, maybe just quit?',
		'Another opponent, another disappointment..'
	];
	const loseMessages = [
		'Pure luck',
		'I need to reprogram this',
		'You must be cheating :x'
	];
	const getMessage = (result) => {
		let random = Math.floor(Math.random() * (3 - 0 + 1) + 0);
		let message;
		if (result === 'computer') {
			message = winMessages[random];
		} else if (result === 'player') {
			message = loseMessages[random];
		} else if (result === 'draw') {
			message = 'DRAW!';
		} else {
			// on start, we have no result yet
			message = '';
		}

		console.log('result', result);
		console.log('message', message);

		return message;
	}

	// define when to show it
	var classes;
	if (status === 'end') {
		classes = '';
	} else {
		classes = 'hide';
	}

	return (
		<section id="result-message" className={classes}>
			<h3>{getMessage(score.lastWinner)}</h3>
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
