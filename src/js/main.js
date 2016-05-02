// copy index.html to public folder
require('../index.html');
require('../../node_modules/foundation-sites/dist/foundation-flex.css');
require('../css/main.css');
require('../img/Rock.png');
require('../img/Paper.png');
require('../img/Scissors.png');

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
