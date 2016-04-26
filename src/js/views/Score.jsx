import React from 'react';

const Score = ({
	score,
	username
}) => (
	<section id="scores">
		<h3>Score</h3>
		<section className="names">
			<span>{username}</span>
			<span>Computer</span>
		</section>
		<section className="scores">
			<span>{score.player}</span>
			<span>{score.computer}</span>
		</section>
	</section>
);

Score.propTypes = {
	score: React.PropTypes.object.isRequired,
	username: React.PropTypes.string.isRequired
};

export default(
	Score
);
