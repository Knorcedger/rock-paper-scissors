import React from 'react';
import Score from './Score.jsx';

const Game = ({
	score,
	username,
	classes
}) => (
	<section className={classes}>
		<Score score={score} username={username} />
	</section>
);

Game.propTypes = {
	score: React.PropTypes.object.isRequired,
	username: React.PropTypes.string.isRequired,
	classes: React.PropTypes.string.isRequired
};

export default(
	Game
);
