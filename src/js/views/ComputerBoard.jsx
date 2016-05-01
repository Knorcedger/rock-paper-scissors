import React from 'react';

const ComputerBoard = ({
	onSelect,
	turn
}) => {
	const weapons = ['rock', 'paper', 'scissors'];
	if (turn === 'computer') {
		let random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
		onSelect(weapons[random]);
	}
	return (
		<section id="computer-board" className={turn === 'computer' ? 'active' : ''}>
			<section	className={turn === 'computer' ? 'hide' : ''}>Preparing...</section>
			<section	className={turn === 'computer' ? '' : 'hide'}>Select something ffs</section>
		</section>
	)
};

ComputerBoard.propTypes = {
	onSelect: React.PropTypes.func.isRequired,
	turn: React.PropTypes.string.isRequired
};

export default(
	ComputerBoard
);
