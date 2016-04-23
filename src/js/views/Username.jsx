import React from 'react';

const Username = ({value}) => (
	<h3>my username: {value}</h3>
);

Username.propTypes = {
	value: React.PropTypes.string.isRequired
};

export default(
	Username
);
