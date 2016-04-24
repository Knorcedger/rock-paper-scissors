import React from 'react';
import store from '../stores/index.js';

const SetUsername = ({classes}) => {
	let input;
	return (
		<div className={classes}>
			<h2>Hello Stranger</h2>
			<form onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				input.value = '';
			}}>
				<input ref={node => {
					input = node;
				}} />
				<button type="submit" onClick={() => {
					store.dispatch({
						type: 'SET_USERNAME',
						text: input.value
					});
				}}>Set Username</button>
			</form>
		</div>
	)
};

SetUsername.propTypes = {
	classes: React.PropTypes.string.isRequired
};

export default(
	SetUsername
);
