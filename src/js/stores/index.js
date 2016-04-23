import {createStore} from 'redux';

// const todo = (state, action) => {
// 	switch (action.type) {
// 	case 'ADD_TODO':
// 		return {
// 			id: action.id,
// 			text: action.text,
// 			completed: false
// 		};
// 	case 'TOGGLE_TODO':
// 		if (state.id !== action.id) {
// 			return state;
// 		}
//
// 		return {
// 			...state,
// 			completed: !state.completed
// 		};
// 	default:
// 		return state;
// 	}
// };

const username = () => {
	// switch (action.type) {
	// case 'UPDATE_USERNAME':
	// 	return action.username;
	// default:
	// 	return state;
	// }
	return {
		username: 'Knorcedger'
	};
};

export default createStore(username);
