import React from 'react';
import SetUsername from './SetUsername.jsx';
import Game from './Game.jsx';
import store from '../stores/index.js';
import {setUsername} from '../actions/index.js';

const App = ({state}) => (
	<section>
		<header>
			<section id="bar">Rock Paper Scissors</section>
			Hello human! Are you ready for the ultimate challenge against the machine AI?
		</header>
		<main>
			<SetUsername onSet={(value) => {
				store.dispatch(setUsername(value));
			}} classes={state.username ? 'hide' : ''} />
			<Game score={state.score} username={state.username} turn={state.turn} classes={state.username ? '' : 'hide'} />
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
