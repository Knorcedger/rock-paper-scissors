import React from 'react';

const ComputerTalk = ({
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
		let random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
		let message;
		if (result === 'computer') {
			message = winMessages[random];
		} else if (result === 'player') {
			message = loseMessages[random];
		} else if (result === 'draw') {
			message = 'Hmmm...';
		} else {
			// on start, we have no result yet
			message = '';
		}

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
		<section>
			<h4 className={status === 'end' ? 'hide' : ''}><strong>Computer</strong>: Analyzing human behavior to secure victory!</h4>
			<h4 className={classes}><strong>Computer</strong>: {getMessage(score.lastWinner)}</h4>
		</section>
	)
};

ComputerTalk.propTypes = {
	score: React.PropTypes.object.isRequired,
	status: React.PropTypes.string.isRequired
};

export default(
	ComputerTalk
);
