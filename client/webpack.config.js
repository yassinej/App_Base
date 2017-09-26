const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';
const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	//resolve-url-loader may be chained before sass-loader if necessary
	use: ['css-loader', 'sass-loader']
});

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: cssConfig
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					'file-loader?name=[name].[ext]&outputPath=images/',
					'image-webpack-loader'
				]
			}
		]
	},
	performance: {
		hints: false
	},
	devtool: 'cheap-module-source-map',
	devServer: {
		proxy: {
			// proxy URLs to backend development server
			'/api': 'http://localhost:5000',
			'/auth': 'http://localhost:5000'
		},
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		stats: 'errors-only',
		clientLogLevel: 'none',
		hot: true,
		watchOptions: {
			ignored: /node_modules/
		},

		historyApiFallback: {
			disableDotRule: true
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			showErrors: true,
			template: './src/assets/templates/my-index.html'
		}),
		new ExtractTextPlugin({
			filename: 'index.css',
			disable: !isProd,
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		})
	]
};
