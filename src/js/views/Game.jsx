import React from 'react';
import Score from './Score.jsx';
import PlayerBoard from './PlayerBoard.jsx';
import ComputerBoard from './ComputerBoard.jsx';
import Result from './Result.jsx';
import store from '../stores/index.js';
import {computerTurn, playerTurn, computerWin, playerWin, draw,
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
			store.dispatch(draw());
		} else if (playerWeapon === 'paper' && computerWeapon === 'scissors') {
			store.dispatch(computerWin());
		} else if (playerWeapon === 'paper' && computerWeapon === 'paper') {
			store.dispatch(draw());
		} else if (playerWeapon === 'paper' && computerWeapon === 'rock') {
			store.dispatch(playerWin());
		} else if (playerWeapon === 'scissors' && computerWeapon === 'scissors') {
			store.dispatch(draw());
		} else if (playerWeapon === 'scissors' && computerWeapon === 'paper') {
			store.dispatch(playerWin());
		} else if (playerWeapon === 'scissors' && computerWeapon === 'rock') {
			store.dispatch(computerWin());
		}
		store.dispatch(gameEnd());
		setTimeout(function() {
			// start game
			store.dispatch(playerTurn());
		}, 3000);
	}
	return (
		<section className={classes + ' row'}>
			<section className="columns small-order-2 medium-order-1 small-6 medium-4">
				<PlayerBoard status={status} weapons={store.getState().weapons} onSelect={(weapon) => {
					store.dispatch(setPlayerWeapon(weapon));
					store.dispatch(computerTurn());
				}} />
			</section>
			<section className="columns small-order-1 medium-order-2 small-12 medium-4">
				<Score className="columns small-12 medium-4" score={score} username={username} />
				<Result score={score} status={status} />
			</section>
			<section className="columns small-order-3 medium-order-3 small-6 medium-4">
				<ComputerBoard status={status} score={score} weapons={store.getState().weapons} onSelect={(weapon) => {
					store.dispatch(setComputerWeapon(weapon));
					checkWinner(store.getState().weapons.player, store.getState().weapons.computer);
				}}  />
			</section>
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
