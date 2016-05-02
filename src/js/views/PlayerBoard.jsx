import React from 'react';

const PlayerBoard = ({
	onSelect,
	status
}) => (
	<section id="player-board" className={status === 'player_turn' ? 'active' : ''}>
		<button type="button" disabled={status === 'end'} onClick={() => onSelect('rock')}><img src="img/Rock.png" /></button>
		<button type="button" disabled={status === 'end'} onClick={() => onSelect('paper')}><img src="img/Paper.png" /></button>
		<button type="button" disabled={status === 'end'} onClick={() => onSelect('scissors')}><img src="img/Scissors.png" /></button>
	</section>
);

PlayerBoard.propTypes = {
	onSelect: React.PropTypes.func.isRequired,
	status: React.PropTypes.string.isRequired
};

export default(
	PlayerBoard
);
