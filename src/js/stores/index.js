import {createStore, combineReducers, applyMiddleware} from 'redux';

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
				computer: state.computer++
			}
		});
	case 'PLAYER_WIN':
		return Object.assign({}, state, {
			score: {
				player: state.player++
			}
		});
	default:
		return state;
	}
};

const weapons = (state = {player: '', computer: ''}, action) => {
	switch (action.type) {
	case 'SET_PLAYER_WEAPON':
		return Object.assign({}, state, {
			player: action.text
		});
	case 'SET_COMPUTER_WEAPON':
		return Object.assign({}, state, {
			computer: action.text
		});
	default:
		return state;
	}
};

const status = (state = 'player_turn', action) => {
	switch (action.type) {
	case 'PLAYER_TURN':
		return 'player_turn';
	case 'COMPUTER_TURN':
		return 'computer_turn';
	case 'GAME_END':
		return 'end';
	default:
		return state;
	}
};

const game = combineReducers({
	username,
	score,
	weapons,
	status
});

function logger() {
	return (next) => (action) => {
		console.log('will dispatch', action)

		// Call the next dispatch method in the middleware chain.
		let returnValue = next(action)

		// console.log('state after dispatch', getState())

		// This will likely be the action itself, unless
		// a middleware further in chain changed it.
		return returnValue
	}
}

export default createStore(game, {}, applyMiddleware(logger));
