import React from 'react';

const PlayerBoard = ({
	onSelect,
	status,
	weapons
}) => (
	<section id="player-board">
		<button type="button" disabled={status === 'end'} className={weapons.player === 'rock' ? 'active' : ''} onClick={() => onSelect('rock')}><img src="img/Rock.png" /></button>
		<button type="button" disabled={status === 'end'} className={weapons.player === 'paper' ? 'active' : ''} onClick={() => onSelect('paper')}><img src="img/Paper.png" /></button>
		<button type="button" disabled={status === 'end'} className={weapons.player === 'scissors' ? 'active' : ''} onClick={() => onSelect('scissors')}><img src="img/Scissors.png" /></button>
	</section>
);

PlayerBoard.propTypes = {
	onSelect: React.PropTypes.func.isRequired,
	status: React.PropTypes.string.isRequired,
	weapons: React.PropTypes.object.isRequired
};

export default(
	PlayerBoard
);
