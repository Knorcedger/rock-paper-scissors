import React from 'react';
import Score from './Score.jsx';
import PlayerBoard from './PlayerBoard.jsx';
import ComputerBoard from './ComputerBoard.jsx';
import store from '../stores/index.js';
import {computerTurn, playerTurn, computerWin, playerWin,
	setPlayerWeapon, setComputerWeapon, gameEnd} from '../actions/index.js';

const Game = ({
	score,
	username,
	status,
	classes
}) => {
	const checkWinner = (playerWeapon, computerWeapon) => {
		if (playerWeapon === 'rock' && computerWeapon === 'scissors') {
			store.dispatch(playerWin());
		} else if (playerWeapon === 'rock' && computerWeapon === 'paper') {
			store.dispatch(computerWin());
		} else if (playerWeapon === 'rock' && computerWeapon === 'rock') {
			// nothing happens
		} else if (playerWeapon === 'paper' && computerWeapon === 'scissors') {
			store.dispatch(computerWin());
		} else if (playerWeapon === 'paper' && computerWeapon === 'paper') {
			// nothing happens
		} else if (playerWeapon === 'paper' && computerWeapon === 'rock') {
			store.dispatch(playerWin());
		} else if (playerWeapon === 'scissors' && computerWeapon === 'scissors') {
			// nothing happens
		} else if (playerWeapon === 'scissors' && computerWeapon === 'paper') {
			store.dispatch(playerWin());
		} else if (playerWeapon === 'scissors' && computerWeapon === 'rock') {
			store.dispatch(computerWin());
		}
		store.dispatch(gameEnd());
		setTimeout(function() {
			// start game
			store.dispatch(playerTurn());
		}, 5000);
	}
	return (
		<section className={classes + ' row'}>
			<PlayerBoard className="columns small-12 medium-4" status={status} onSelect={(weapon) => {
				store.dispatch(setPlayerWeapon(weapon));
				store.dispatch(computerTurn());
			}} />
			<Score className="columns small-12 medium-4" score={score} username={username} />
			<ComputerBoard className="columns small-12 medium-4" status={status} onSelect={(weapon) => {
				store.dispatch(setComputerWeapon(weapon));
				checkWinner(store.getState().weapons.player, store.getState().weapons.computer);
			}}  />
		</section>
	)
};

Game.propTypes = {
	score: React.PropTypes.object.isRequired,
	username: React.PropTypes.string.isRequired,
	status: React.PropTypes.string.isRequired,
	classes: React.PropTypes.string.isRequired
};

export default(
	Game
);
