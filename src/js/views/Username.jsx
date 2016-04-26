import React from 'react';

const Username = ({
	value,
	classes
}) => (
	<section className={classes}>
		<h3>my username: {value}</h3>
	</section>
);

Username.propTypes = {
	value: React.PropTypes.string.isRequired,
	classes: React.PropTypes.string.isRequired
};

export default(
	Username
);
