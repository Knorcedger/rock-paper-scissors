import React from 'react';

const PlayerBoard = ({
	onSelect,
	status
}) => (
	<section id="player-board" className={status === 'player_turn' ? 'active' : ''}>
		<button type="button" disabled={status === 'computer_turn'} onClick={() => onSelect('rock')}>Rock</button>
		<button type="button" disabled={status === 'computer_turn'} onClick={() => onSelect('paper')}>Paper</button>
		<button type="button" disabled={status === 'computer_turn'} onClick={() => onSelect('scissors')}>Scissors</button>
	</section>
);

PlayerBoard.propTypes = {
	onSelect: React.PropTypes.func.isRequired,
	status: React.PropTypes.string.isRequired
};

export default(
	PlayerBoard
);
