import React from 'react';

const SetUsername = ({
	classes,
	onSet
}) => {
	let input;
	return (
		<section className={classes}>
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
			<button type="submit" onClick={() => onSet(input.value)}>Set Username</button>
			</form>
		</section>
	)
};

SetUsername.propTypes = {
	onSet: React.PropTypes.func.isRequired,
	classes: React.PropTypes.string.isRequired
};

export default(
	SetUsername
);
