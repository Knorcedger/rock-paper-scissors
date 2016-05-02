export const setUsername = (text) => {
	return {
		type: 'SET_USERNAME',
		text
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

export const draw = () => {
	return {
		type: 'DRAW'
	}
};

export const setPlayerWeapon = (text) => {
	return {
		type: 'SET_PLAYER_WEAPON',
		text
	}
};

export const setComputerWeapon = (text) => {
	return {
		type: 'SET_COMPUTER_WEAPON',
		text
	}
};

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

export const gameEnd = () => {
	return {
		type: 'GAME_END'
	}
};
