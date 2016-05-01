var publicRoot = './public/';

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
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
