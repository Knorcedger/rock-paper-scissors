// copy index.html to public folder
var index = require('../index.html'); // eslint-disable-line no-unused-vars
var mainCss = require('../css/main.css'); // eslint-disable-line no-unused-vars

import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App.jsx';
import store from './stores/index.js';

const render = () => {
	ReactDOM.render(
		<App state={store.getState()} />,
		document.getElementById('root')
	);
};

store.subscribe(render);
render();
