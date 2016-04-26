import React from 'react';
import Score from './Score.jsx';
import PlayerBoard from './PlayerBoard.jsx';
import ComputerBoard from './ComputerBoard.jsx';
import store from '../stores/index.js';
import {computerTurn} from '../actions/index.js';

const Game = ({
	score,
	username,
	turn,
	classes
}) => (
	<section className={classes}>
		<PlayerBoard turn={turn} onSelect={() => {
			console.log('selected');
			store.dispatch(computerTurn());
		}} />
		<Score score={score} username={username} />
		<ComputerBoard />
	</section>
);

Game.propTypes = {
	score: React.PropTypes.object.isRequired,
	username: React.PropTypes.string.isRequired,
	turn: React.PropTypes.string.isRequired,
	classes: React.PropTypes.string.isRequired
};

export default(
	Game
);
