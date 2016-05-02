import React from 'react';

const ComputerBoard = ({
	onSelect,
	status
}) => {
	const weapons = ['rock', 'paper', 'scissors'];
	if (status === 'computer_turn') {
		let random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
		onSelect(weapons[random]);
	}
	return (
		<section id="computer-board" className={status === 'computer' ? 'active' : ''}>
			<section	className={status === 'computer' ? 'hide' : ''}>Preparing...</section>
			<section	className={status === 'computer' ? '' : 'hide'}>Select something ffs</section>
		</section>
	)
};

ComputerBoard.propTypes = {
	onSelect: React.PropTypes.func.isRequired,
	status: React.PropTypes.string.isRequired
};

export default(
	ComputerBoard
);
