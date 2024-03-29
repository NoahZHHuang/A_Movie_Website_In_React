const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const HTMLWebpackPlugin = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, './app/index.html'),
	filename: 'index.html',
	inject: 'body'
});

const COPYWebpackPlugin = new CopyWebpackPlugin([{
	from: path.resolve(__dirname, './app/assets/imgs'),
	to: path.resolve(__dirname, './dist/assets/imgs')
}]);

const UGLIFYJsPlugin = new UglifyJsPlugin({
	test: /\.js($|\?)/i
});


module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: [ 'style-loader', 'css-loader', 'less-loader']
			},
			{
        test: /\.(png|jp(e*)g|svg)$/, 
        include: path.resolve(__dirname, './app/assets/icons'),
        loader: 'url-loader',
			}
		]
  },
	plugins: [
    HTMLWebpackPlugin,
    COPYWebpackPlugin,
    UGLIFYJsPlugin
	]
};
