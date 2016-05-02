import React from 'react';
import SetUsername from './SetUsername.jsx';
import Game from './Game.jsx';
import store from '../stores/index.js';
import {setUsername} from '../actions/index.js';
import classNames from 'classnames';
// var classNames = require('classnames');

const App = ({state}) => {
	var subHeader1Class = classNames({
		'columns': true,
		'small-8': true,
		'hide': state.username
	});
	var subHeader2Class = classNames({
		'columns': true,
		'small-12': true,
		'hide': !state.username
	});
	return (
		<section>
			<header>
				<section id="bar"><h1>Rock Paper Scissors</h1></section>
				<section className="sub-header row align-center">
					<h2 className={subHeader1Class}>Hello human! Are you ready for the ultimate challenge against the machine AI?</h2>
					<h2 className={subHeader2Class}>Let's see what you've got!</h2>
				</section>
			</header>
			<main>
				<section className="row align-center">
					<section className="columns small-8 medium-6 large-4">
						<SetUsername onSet={(value) => {
							store.dispatch(setUsername(value));
						}} classes={state.username ? 'hide' : ''} />
					</section>
				</section>
			<Game score={state.score} username={state.username} status={state.status} classes={state.username ? '' : 'hide'} />
			</main>
			<footer>
				Created by Knorcedger (Achilleas Tsoumitas) <a href="https://github.com/Knorcedger/rock-paper-scissors">Code on Github</a>
			</footer>
		</section>
	)
};

App.propTypes = {
	state: React.PropTypes.object.isRequired
};

export default(
	App
);
