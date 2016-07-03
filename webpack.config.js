module.exports = {
	entry: './src/js/main',
	output: {
		path: './public/',
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
		}, {
			test: /\.ico$/,
			loader: 'file-loader',
			query: {
				name: '[name].[ext]'
			}
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
