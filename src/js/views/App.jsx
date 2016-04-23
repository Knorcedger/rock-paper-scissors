import React from 'react';
import Username from './Username.jsx';
import SetUsername from './SetUsername.jsx';

const App = ({state}) => (
	<div>
		<SetUsername />
		<Username value={state.username} />
	</div>
);

App.propTypes = {
	state: React.PropTypes.object.isRequired
};

export default(
	App
);
