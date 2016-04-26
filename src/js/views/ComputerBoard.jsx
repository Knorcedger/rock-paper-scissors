import React from 'react';

setTimeout(() => {
	console.log('computer plays');
}, 3000);

const ComputerBoard = ({
	onSelect,
	turn
}) => (
	<section id="player-board" className={turn === 'player' ? 'active' : ''}>
		<button type="button" onClick={() => onSelect('rock')}>Rock</button>
		<button type="button" onClick={() => onSelect('paper')}>Paper</button>
		<button type="button" onClick={() => onSelect('scissors')}>Scissors</button>
	</section>
);

ComputerBoard.propTypes = {
	onSelect: React.PropTypes.func.isRequired,
	turn: React.PropTypes.string.isRequired
};

export default(
	ComputerBoard
);
