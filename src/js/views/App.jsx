import React from 'react';
import Username from './Username.jsx';
import store from '../stores/index.js';

const App = ({store}) => (
	<div>
		<Username value={store.username} />
	</div>
);

App.propTypes = {
	store: React.PropTypes.object.isRequired
};

export default(
	<App store={store.getState()}/>
);
