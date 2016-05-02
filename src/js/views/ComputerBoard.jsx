import React from 'react';
import ComputerTalk from './ComputerTalk.jsx';

const ComputerBoard = ({
	onSelect,
	status,
	score
}) => {
	const weapons = ['rock', 'paper', 'scissors'];
	if (status === 'computer_turn') {
		let random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
		onSelect(weapons[random]);
	}
	return (
		<section id="computer-board" className={status === 'computer' ? 'active' : ''}>
			<section	className={status === 'end' ? 'hide' : ''}><h4>Computer: Analyzing human bahavior to secure victory!</h4></section>
			<ComputerTalk status={status} score={score} />
		</section>
	)
};

ComputerBoard.propTypes = {
	onSelect: React.PropTypes.func.isRequired,
	status: React.PropTypes.string.isRequired,
	score: React.PropTypes.object.isRequired
};

export default(
	ComputerBoard
);
