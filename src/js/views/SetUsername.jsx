import React from 'react';
import store from '../stores/index.js';

const SetUsername = () => {
	let input;
	return (
		<div>
			<h2>Hello Stranger</h2>
			<form onSubmit={e => {
				console.log('yyyyyyyyyyyy');
				e.preventDefault();
				// if (!input.value.trim()) {
				// 	return;
				// }
				// input.value = '';
			}}>
				<input />
				<button type="submit" onClick={() => {
					store.dispatch({
						type: 'SET_USERNAME',
						text: 'me'
					});
				}}>Set Username</button>
			</form>
		</div>
	)
};

// SetUsername.propTypes = {
// 	store: React.PropTypes.object.isRequired
// };

export default(
	SetUsername
);
