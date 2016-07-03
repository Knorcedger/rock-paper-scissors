const webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

webpackConfig.plugins = [
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		compress: {
			warnings: false
		}
	}),
	new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('production')
		}
	})
];

module.exports = webpackConfig;
