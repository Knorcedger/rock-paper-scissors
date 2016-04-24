var publicRoot = './public/';

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
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
