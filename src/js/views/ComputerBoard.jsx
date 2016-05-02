import React from 'react';
import ComputerTalk from './ComputerTalk.jsx';

const ComputerBoard = ({
	onSelect,
	status,
	score,
	weapons
}) => {
	const availableWeapons = ['rock', 'paper', 'scissors'];
	if (status === 'computer_turn') {
		let random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
		onSelect(availableWeapons[random]);
	}
	return (
		<section id="computer-board" className={status === 'computer' ? 'active' : ''}>
			<img className={status === 'end' && weapons.computer === 'rock' ? '' : 'hide'} src="img/Rock.png" />
			<img className={status === 'end' && weapons.computer === 'paper' ? '' : 'hide'} src="img/Paper.png" />
			<img className={status === 'end' && weapons.computer === 'scissors' ? '' : 'hide'} src="img/Scissors.png" />
			<ComputerTalk status={status} score={score} />
		</section>
	)
};

ComputerBoard.propTypes = {
	onSelect: React.PropTypes.func.isRequired,
	status: React.PropTypes.string.isRequired,
	score: React.PropTypes.object.isRequired,
	weapons: React.PropTypes.object.isRequired
};

export default(
	ComputerBoard
);
