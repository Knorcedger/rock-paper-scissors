let nextGameId = 0;
export const setUsername = (text) => {
	return {
		type: 'SET_USERNAME',
		text
	}
};

// export const startGame = () => {
// 	return {
// 		type: 'START_GAME',
// 		id: nextGameId
// 	}
// };

export const playerTurn = () => {
	return {
		type: 'PLAYER_TURN'
	}
};

export const computerTurn = () => {
	return {
		type: 'COMPUTER_TURN'
	}
};

export const playerWin = () => {
	return {
		type: 'PLAYER_WIN'
	}
};

export const computerWin = () => {
	return {
		type: 'COMPUTER_WIN'
	}
};
