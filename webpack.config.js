var publicRoot = './public/';
const webpack = require('webpack');

module.exports = {
	entry: './src/js/main',
	output: {
		filename: publicRoot + 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader'
		}, {
			test: /\.html/,
			loader: 'file-loader',
			query: {
				name: publicRoot + 'index.html'
			}
		}, {
			test: /\.css/,
			loader: 'file-loader',
			query: {
				name: publicRoot + 'main.css'
			}
		}]
	},
	plugins: [
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
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
