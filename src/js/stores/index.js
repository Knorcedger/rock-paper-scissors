import {createStore, combineReducers} from 'redux';

const username = (state = '', action) => {
	switch (action.type) {
	case 'SET_USERNAME':
		return action.text;
	default:
		return state;
	}
};

const score = (state = {player: 0, computer: 0}, action) => {
	switch (action.type) {
	case 'COMPUTER_WIN':
		return Object.assign({}, state, {
			score: {
				computer: state.score.computer++
			}
		});
	case 'PLAYER_WIN':
		return Object.assign({}, state, {
			score: {
				player: state.score.player++
			}
		});
	default:
		return state;
	}
};

const turn = (state = 'player', action) => {
	switch (action.type) {
	case 'PLAYER_TURN':
		return 'player';
	case 'COMPUTER_TURN':
		return 'computer';
	default:
		return state;
	}
};

const game = combineReducers({
	username,
	score,
	turn
});

export default createStore(game);
