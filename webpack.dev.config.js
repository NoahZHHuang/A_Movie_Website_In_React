const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const apiMocker = require('mocker-api');

const HTMLWebpackPlugin = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, './app/index.html'),
	filename: 'index.html',
	inject: 'body'
});

const COPYWebpackPlugin = new CopyWebpackPlugin([{
	from: path.resolve(__dirname, './app/assets/imgs'),
	to: path.resolve(__dirname, './dist/assets/imgs')
}]);

console.log(path.resolve('./mock/index.js'));

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
	devServer: {
    inline: true,
    port: 8008,
    contentBase: 'dist',
    before(app){
      apiMocker(app, path.resolve('./app/mock/index.js'));
    }
	},
	plugins: [
    HTMLWebpackPlugin,
    COPYWebpackPlugin
	]
};
