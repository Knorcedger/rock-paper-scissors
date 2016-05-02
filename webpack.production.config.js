var publicRoot = './public/';
const webpack = require('webpack');

module.exports = {
	entry: './src/js/main',
	output: {
		path: publicRoot,
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.html$/,
			loader: 'file-loader',
			query: {
				name: '[name].html'
			}
		}, {
			test: /\.png$/,
			loader: 'file-loader',
			query: {
				name: 'img/[name].[ext]'
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
