import React from 'react';
import SetUsername from './SetUsername.jsx';
import Game from './Game.jsx';
import store from '../stores/index.js';
import {setUsername} from '../actions/index.js';

const App = ({state}) => (
	<section>
		<header>
			<section id="bar"><h1>Rock Paper Scissors</h1></section>
			<section className="row align-center">
				<h2 className="small-6 columns">Hello human! Are you ready for the ultimate challenge against the machine AI?</h2>
			</section>
		</header>
		<main className="row align-center">
			<SetUsername onSet={(value) => {
				store.dispatch(setUsername(value));
			}} classes={state.username ? 'hide' : ''} />
			<Game score={state.score} username={state.username} turn={state.turn} classes={state.username ? '' : 'hide'} />
		</main>
		<footer>
			Created by Knorcedger (Achilleas Tsoumitas) <a href="https://github.com/Knorcedger/rock-paper-scissors">Code on Github</a>
		</footer>
	</section>
);

App.propTypes = {
	state: React.PropTypes.object.isRequired
};

export default(
	App
);
