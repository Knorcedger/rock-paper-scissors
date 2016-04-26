import React from 'react';

const PlayerBoard = ({
	onSelect,
	turn
}) => (
	<section id="player-board" className={turn === 'player' ? 'active' : ''}>
		<button type="button" onClick={() => onSelect('rock')}>Rock</button>
		<button type="button" onClick={() => onSelect('paper')}>Paper</button>
		<button type="button" onClick={() => onSelect('scissors')}>Scissors</button>
	</section>
);

PlayerBoard.propTypes = {
	onSelect: React.PropTypes.func.isRequired,
	turn: React.PropTypes.string.isRequired
};

export default(
	PlayerBoard
);
