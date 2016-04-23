let nextGameId = 0;
export const setUsername = (text) => {
	return {
		type: 'SET_USERNAME',
		text
	}
};

export const startGame = () => {
	return {
		type: 'START_GAME',
		id: nextGameId
	}
};
