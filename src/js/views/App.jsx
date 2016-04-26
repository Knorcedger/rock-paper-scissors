import React from 'react';
import Username from './Username.jsx';
import SetUsername from './SetUsername.jsx';
import Game from './Game.jsx';

const App = ({state}) => (
	<section>
		<header>
			<SetUsername classes={state.username ? 'hide' : ''} />
		</header>
		<main>
			<Username value={state.username} classes={state.username ? '' : 'hide'} />
			<Game score={state.score} username={state.username} classes={state.username ? '' : 'hide'} />
		</main>
		<footer>
			Created by Knorcedger (Achilleas Tsoumitas)
		</footer>
	</section>
);

App.propTypes = {
	state: React.PropTypes.object.isRequired
};

export default(
	App
);
